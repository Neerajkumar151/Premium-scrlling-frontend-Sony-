// import React, { useEffect, useRef, useState } from 'react';
// import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

// export default function ImageSequence({ containerRef }) {
//   const canvasRef = useRef(null);
//   const [images, setImages] = useState([]);
//   const frameCount = 240; 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });
  
//   // Transform scroll progress to frame index
//   // We map 0 to 1 directly to 0 to frameCount-1
//   const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

//   useEffect(() => {
//     const loadedImages = [];
//     const promises = [];

//     for (let i = 1; i <= frameCount; i++) {
//         const promise = new Promise((resolve) => {
//             const img = new Image();
//             const paddedIndex = i.toString().padStart(3, '0');
//             img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
//             img.onload = () => resolve(img);
//             loadedImages.push(img);
//         });
//         promises.push(promise);
//     }

//     Promise.all(promises).then(() => {
//         setImages(loadedImages);
//     });
//   }, []);

//   const renderFrame = (index) => {
//     const canvas = canvasRef.current;
//     if (!canvas || images.length === 0) return;
//     const ctx = canvas.getContext('2d');
    
//     // Clear? Not strictly needed if drawing full opaque frame
//     const img = images[Math.round(index)];
//     if (img) {
//         // Maintain aspect ratio or cover? "object-contain" usually implies "fit"
//         // But for canvas, we draw image to fill or fit.
//         // Let's draw it to fill height/width nicely.
//         // Assuming 16:9 images.
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
//         // Draw image centered and scaled to cover or contain
//         // Let's do simple draw for now 
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     }
//   };

//   useMotionValueEvent(frameIndex, "change", (latest) => {
//     renderFrame(latest);
//   });
  
//   // Initial render when images load
//   useEffect(() => {
//     if(images.length > 0) renderFrame(frameIndex.get());
//   }, [images]);

//   return (
//     <div className="fixed inset-0 z-0 flex items-center justify-center bg-sony-black pointer-events-none">
//          <canvas 
//             ref={canvasRef}
//             className="w-full h-full object-contain md:object-cover"
//             width={1280} 
//             height={720}
//          />
//     </div>
//   );
// }













import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

export default function ImageSequence({ containerRef, onLoadProgress }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 240; 

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0 to 1) to frame index (0 to 239)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // 1. Preload Images & Report Progress
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];
    const promises = [];

    for (let i = 1; i <= frameCount; i++) {
        const promise = new Promise((resolve) => {
            const img = new Image();
            // Ensure your source images are actually 1080p+ for best results
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
            
            img.onload = () => {
                loadedCount++;
                // Report progress percentage to parent
                if (onLoadProgress) {
                    onLoadProgress(Math.round((loadedCount / frameCount) * 100));
                }
                resolve(img);
            };
            // Handle errors gracefully so one bad image doesn't break the app
            img.onerror = () => {
                loadedCount++;
                if (onLoadProgress) onLoadProgress(Math.round((loadedCount / frameCount) * 100));
                resolve(null); // Resolve with null to keep order index correct
            };
            loadedImages[i - 1] = img; // Store in index order
        });
        promises.push(promise);
    }

    Promise.all(promises).then(() => {
        setImages(loadedImages);
    });
  }, []);

  // 2. The "Cover" Logic Draw Function
  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    
    const ctx = canvas.getContext('2d');
    
    // Get the image for the current frame
    const img = images[Math.round(index)];
    
    if (img) {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        
        // Calculate scale needed to COVER the canvas
        // This acts exactly like CSS object-fit: cover
        const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
        
        const x = (canvasWidth / 2) - (img.width / 2) * scale;
        const y = (canvasHeight / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  };

  // 3. Handle Canvas Resizing for High DPI / Responsiveness
  useEffect(() => {
    const handleResize = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            // Set canvas internal resolution to match window size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Re-render current frame immediately after resize
            // We use the current value from the motion value
            renderFrame(frameIndex.get());
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing

    return () => window.removeEventListener('resize', handleResize);
  }, [images]); // Re-run if images reload (rare) but mostly for the renderFrame access

  // Update frame on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(latest);
  });
  
  // Initial render when images finish loading
  useEffect(() => {
    if(images.length > 0) renderFrame(frameIndex.get());
  }, [images]);

  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center bg-sony-black pointer-events-none">
         <canvas 
            ref={canvasRef}
            className="w-full h-full block" // block removes standard inline-block spacing
            // Note: We don't set width/height attributes here anymore, 
            // we handle it in the resize effect for perfect pixel matching.
         />
    </div>
  );
}