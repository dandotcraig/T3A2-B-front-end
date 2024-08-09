import * as React from "react"

export default function SvgComponent({ theme, ...props }) {
    const strokeColour = theme === 'light' ? '#76443E' : '76443E';
    const fillColour = theme === 'dark' ? '#162CEB' : '#C9243A';
    
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="full"
            height="3rem"
            fill="none"
            {...props}
        >
        <path
        stroke={fillColour}
        d="M.5 6A5.5 5.5 0 0 1 6 .5h186a5.5 5.5 0 0 1 5.5 5.5v28a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 34V6Z"
        />
        <path
        stroke={fillColour}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M29 15v-3a2 2 0 0 1 2-2h8.5l5.5 5.5V28a2 2 0 0 1-2 2h-6"
        />
        <path
        stroke={fillColour}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M39 10v6h6M30 25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <path
        stroke={strokeColour}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m32 24.5 1 5.5-3-1-3 1 1-5.5"
        />
        <path
        fill={fillColour}
        d="M63.398 18.966c3.122.252 5.32.91 5.32 3.066 0 1.932-1.834 3.276-5.306 3.276-2.478 0-4.494-.7-5.992-1.974l1.288-1.526c1.204 1.106 2.758 1.624 4.76 1.624 1.988 0 2.996-.378 2.996-1.19 0-.812-1.008-1.036-3.262-1.232-2.8-.238-5.404-.854-5.404-2.954 0-2.044 2.184-3.164 5.208-3.164 2.142 0 3.99.532 5.236 1.498l-1.232 1.554c-1.078-.826-2.408-1.162-4.004-1.176-1.33-.014-2.954.224-2.954 1.12 0 .84 1.4.924 3.346 1.078ZM79.135 15.2h2.24v5.18c0 2.94-1.946 4.928-5.502 4.928S70.37 23.32 70.37 20.38V15.2h2.24v5.012c0 1.96 1.148 3.136 3.262 3.136s3.262-1.176 3.262-3.136V15.2Zm11.399 0c2.52 0 4.2 1.176 4.2 3.318 0 2.17-1.68 3.318-4.2 3.318h-4.466V25h-2.24v-9.8h6.706Zm-.182 4.788c1.26 0 2.1-.336 2.1-1.456 0-1.12-.84-1.456-2.1-1.456h-4.284v2.912h4.284ZM102.228 25h-2.24v-9.8h2.24V25Zm11.615-9.8h2.17V25h-1.96l-7.028-7.084V25h-2.17v-9.8h2.38l6.608 6.72V15.2Zm3.519 0h2.45l3.696 7.574 3.682-7.574h2.422L124.67 25h-2.366l-4.942-9.8Zm18.7 10.108c-3.822 0-6.23-1.932-6.23-5.208 0-3.276 2.408-5.208 6.23-5.208 3.822 0 6.23 1.932 6.23 5.208 0 3.276-2.408 5.208-6.23 5.208Zm0-1.932c2.422 0 3.948-1.176 3.948-3.276 0-2.1-1.526-3.276-3.948-3.276-2.422 0-3.948 1.176-3.948 3.276 0 2.1 1.512 3.276 3.948 3.276ZM146.552 25h-2.24v-9.8h2.24V25Zm8.143-1.624c1.456 0 2.534-.476 3.262-1.596l2.044 1.022c-.924 1.386-2.814 2.506-5.376 2.506-3.682 0-6.076-1.946-6.076-5.208 0-3.262 2.394-5.208 6.174-5.208 2.464 0 4.354 1.134 5.25 2.492l-2.058 1.022c-.7-1.092-1.764-1.582-3.22-1.582-2.324 0-3.864 1.12-3.864 3.276 0 2.156 1.54 3.276 3.864 3.276Zm9.206-.252h7.868V25h-10.094v-9.8h9.954v1.876h-7.728v2.016h6.454v1.876h-6.454v2.156Z"
        />
        </svg>
    );
};
