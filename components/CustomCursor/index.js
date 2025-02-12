import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, hover: false });

  useEffect(() => {
    const updatePosition = (e) => {
      const isHovering = e.target.closest("a, button"); // Check if hovering over clickable elements
      setPosition({ x: e.clientX, y: e.clientY, hover: !!isHovering });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: -10,
        left: 0,
        width: "32px",
        height: "32px",
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.08s linear",
        zIndex: 9999,
      }}
    >
        <svg width="36" height="36" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_748_1278)">
                <path d="M23.9999 20C24.1999 20 24.4999 19.8 24.6999 19.7C26.2999 18.7 26.4999 16.5 25.4999 15.2C24.6999 14.2 23.2999 13.7 22.0999 14.1C22.2999 8.49996 17.7999 1.69996 11.7999 0.59996C11.4999 0.59996 5.69991 -0.50004 2.39991 3.59996C-1.20009 7.99996 1.59991 14.2 1.79991 14.5C4.09991 19.3 9.89991 22.2 14.7999 21.7C14.5999 22.4 14.5999 23.2 14.9999 23.9C15.7999 25.5 17.8999 26.1 19.3999 25.2C19.9999 24.8 20.3999 24.3 20.5999 23.6C21.2999 23.7 22.0999 23.6 22.7999 23.2C23.8999 22.5 24.3999 21.1 24.1999 19.9L23.9999 20Z" fill="#F4C592" stroke="#CE944E" stroke-width="0.9" stroke-miterlimit="10"/>
                <path d="M7.40078 4.79985C7.73215 4.79985 8.00078 4.53122 8.00078 4.19985C8.00078 3.86848 7.73215 3.59985 7.40078 3.59985C7.06941 3.59985 6.80078 3.86848 6.80078 4.19985C6.80078 4.53122 7.06941 4.79985 7.40078 4.79985Z" fill="#CE944E"/>
                <path d="M9.29922 6.7C9.63059 6.7 9.89922 6.43137 9.89922 6.1C9.89922 5.76863 9.63059 5.5 9.29922 5.5C8.96785 5.5 8.69922 5.76863 8.69922 6.1C8.69922 6.43137 8.96785 6.7 9.29922 6.7Z" fill="#CE944E"/>
                <path d="M5.19922 5.59985C5.19922 5.79985 5.19922 6.99985 6.09922 7.79985C6.99922 8.59985 7.99922 8.59985 8.19922 8.59985" fill="#F4C592"/>
                <path d="M5.19922 5.59985C5.19922 5.79985 5.19922 6.99985 6.09922 7.79985C6.99922 8.59985 7.99922 8.59985 8.19922 8.59985" stroke="#CE944E" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.9 7.09985C15.7 7.89985 15.6 9.19985 14.9 9.69985C14.4 10.0999 13.6 9.99985 13 9.59985" fill="#F4C592"/>
                <path d="M14.9 7.09985C15.7 7.89985 15.6 9.19985 14.9 9.69985C14.4 10.0999 13.6 9.99985 13 9.59985" stroke="#CE944E" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.0992 9.5C13.8992 10.3 13.7992 11.6 13.0992 12.1C12.5992 12.5 11.7992 12.4 11.1992 12" fill="#F4C592"/>
                <path d="M13.0992 9.5C13.8992 10.3 13.7992 11.6 13.0992 12.1C12.5992 12.5 11.7992 12.4 11.1992 12" stroke="#CE944E" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.2008 11.8999C12.0008 12.6999 11.9008 13.9999 11.2008 14.4999C10.7008 14.8999 9.90078 14.7999 9.30078 14.3999" fill="#F4C592"/>
                <path d="M11.2008 11.8999C12.0008 12.6999 11.9008 13.9999 11.2008 14.4999C10.7008 14.8999 9.90078 14.7999 9.30078 14.3999" stroke="#CE944E" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.9996 10.2C18.7996 11 18.6996 12.3 17.9996 12.8C17.4996 13.2 16.6996 13.1 16.0996 12.7" fill="#F4C592"/>
                <path d="M17.9996 10.2C18.7996 11 18.6996 12.3 17.9996 12.8C17.4996 13.2 16.6996 13.1 16.0996 12.7" stroke="#CE944E" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.0992 12.5999C16.8992 13.3999 16.7992 14.6999 16.0992 15.1999C15.5992 15.5999 14.7992 15.4999 14.1992 15.0999" fill="#F4C592"/>
                <path d="M16.0992 12.5999C16.8992 13.3999 16.7992 14.6999 16.0992 15.1999C15.5992 15.5999 14.7992 15.4999 14.1992 15.0999" stroke="#CE944E" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.3004 15C15.1004 15.8 15.0004 17.1 14.3004 17.6C13.8004 18 13.0004 17.9 12.4004 17.5" fill="#F4C592"/>
                <path d="M14.3004 15C15.1004 15.8 15.0004 17.1 14.3004 17.6C13.8004 18 13.0004 17.9 12.4004 17.5" stroke="#CE944E" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_748_1278">
                <rect width="26.5" height="26.1" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </div>
  );
};

export default CustomCursor;
