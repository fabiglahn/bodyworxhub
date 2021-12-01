import React from "react";
import styles from "./HomeCards.module.css";

function HomeCards() {
  return (
    <div className={styles.cards}>
      <div className={styles.singlecard}>
        <h4 className={styles.categories}>outdoor schedule</h4>
        <svg
          className={styles.icons}
          width="70"
          height="70"
          fill="none"
          viewBox="0 0 36 36"
        >
          <g transform="translate(0 -1020.362)">
            <path d="m 15.99903,1028.8625 c -4.13591,0 -7.49945,3.3638 -7.49945,7.5001 0,4.1363 3.36354,7.5002 7.49945,7.5002 4.1359,0 7.49944,-3.3639 7.49944,-7.5002 0,-4.1363 -3.36354,-7.5001 -7.49944,-7.5001 z m 0,1 c 3.5955,0 6.49952,2.9042 6.49952,6.5001 0,3.5959 -2.90402,6.5002 -6.49952,6.5002 -3.59551,0 -6.49952,-2.9043 -6.49952,-6.5002 0,-3.5959 2.90401,-6.5001 6.49952,-6.5001 z" />
            <path d="M15.99122 1022.3623a.50001284.5000613 0 00-.49216.5078l0 2.9845a.50001284.5000613 0 10.99993 0l0-2.9845a.50001284.5000613 0 00-.50777-.5078zM15.99122 1046.3628a.50001284.5000613 0 00-.49216.5079l0 2.9844a.50001284.5000613 0 10.99993 0l0-2.9844a.50001284.5000613 0 00-.50777-.5079zM2.50784 1035.8626a.50001284.5000613 0 100 1l2.9861 0a.50001284.5000613 0 100-1zM26.50606 1035.8626a.50001284.5000613 0 100 1l2.9861 0a.50001284.5000613 0 100-1zM25.48466 1026.3624a.50001284.5000613 0 00-.34373.1523l-1.9901 1.9883a.50001284.5000613 0 10.70698.7072l1.9901-1.9884a.50001284.5000613 0 00-.36325-.8594zM6.49973 1026.3624a.50001284.5000613 0 00-.34763.8594l1.99009 1.9884a.50001284.5000613 0 10.70698-.7072l-1.99009-1.9883a.50001284.5000613 0 00-.35935-.1523zM23.49847 1043.3628a.50001284.5000613 0 00-.34764.8594l1.9901 1.9883a.50001284.5000613 0 10.70698-.7071l-1.9901-1.9883a.50001284.5000613 0 00-.35934-.1523zM8.48591 1043.3628a.50001284.5000613 0 00-.34372.1523l-1.99009 1.9883a.50001284.5000613 0 10.70698.7071l1.99009-1.9883a.50001284.5000613 0 00-.36326-.8594z" />
          </g>
        </svg>
      </div>
      <div className={styles.singlecard}>
        <h4 className={styles.categories}>outdoor locations</h4>
        <svg
          className={styles.icons}
          width="70"
          height="70"
          fill="none"
          viewBox="0 0 512 512"
        >
          <path d="M256 48c34.19 0 66.334 13.314 90.51 37.49S384 141.81 384 176c0 42.92-24.092 107.127-69.67 185.68-22.279 38.396-44.771 71.634-58.332 90.931-13.518-19.232-35.912-52.327-58.161-90.645C152.149 283.281 128 218.976 128 176c0-34.19 13.314-66.334 37.49-90.51S221.81 48 256 48m0-16c-79.529 0-144 64.471-144 144 0 112 144 304 144 304s144-192 144-304c0-79.529-64.471-144-144-144z" />
          <path d="M256 112c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 110.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z" />
        </svg>
      </div>
      <div className={styles.singlecard}>
        <h4 className={styles.categories}>online schedule</h4>
        <svg
          className={styles.icons}
          width="70"
          height="70"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path d="m 4.8125,0.501953 c -1,0 -1.8125,0.8125 -1.8125,1.8125 L 3,14.1875 C 3,15.1875 3.8125,16 4.8125,16 l 5.875,0 c 1,0 1.8125,-0.8125 1.8125,-1.8125 l 0,-11.873047 c 0,-1 -0.8125,-1.8125 -1.8125,-1.8125 l -5.875,0 z m 0,0.5 5.875,0 c 0.724,0 1.3125,0.5885 1.3125,1.3125 l 0,10.1875 -8.5,0 0,-10.1875 c 0,-0.725 0.5885,-1.3125 1.3125,-1.3125 z m 1.921875,1.5214844 0,0.5 2.015625,0 0,-0.5 -2.015625,0 z M 3.5,13.001953 l 8.500001,0 0,1.1875 c 0,0.724 -0.5885,1.3125 -1.3125,1.3125 l -5.875001,0 c -0.724,0 -1.3125,-0.5885 -1.3125,-1.3125 l 0,-1.1875 z" />
        </svg>
      </div>
      <div className={styles.singlecard}>
        <h4 className={styles.categories}>profile</h4>
        <svg
          className={styles.icons}
          fill="none"
          width="70"
          height="70"
          viewBox="0 0 36 36"
        >
          <g>
            <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1s15 6.716 15 15c0 8.284-6.716 15-15 15z" />
            <path d="M19.37 15.672A4.968 4.968 0 0 0 21 12a5 5 0 0 0-10 0c0 1.458.634 2.758 1.63 3.672C9.332 17.006 7 20.224 7 24h18c0-3.776-2.332-6.994-5.63-8.328zM12 12a4 4 0 1 1 6.26 3.298c-.05.034-.106.06-.158.092-.145.09-.295.174-.452.245-.077.035-.158.065-.238.095-.15.057-.304.105-.462.143-.075.018-.149.039-.226.053-.235.044-.476.074-.724.074s-.489-.03-.725-.073c-.077-.014-.151-.035-.226-.053a4.194 4.194 0 0 1-.462-.143c-.08-.03-.16-.06-.238-.095a3.934 3.934 0 0 1-.452-.245c-.052-.032-.108-.058-.158-.092A3.998 3.998 0 0 1 12 12zM8.069 23a8.003 8.003 0 0 1 5.546-6.631c.712.389 1.516.631 2.385.631s1.673-.242 2.385-.631A8.004 8.004 0 0 1 23.931 23H8.069z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HomeCards;