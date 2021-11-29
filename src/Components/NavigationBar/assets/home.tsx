export default function HomeIcon(
  props: React.SVGProps<SVGPathElement>
): JSX.Element {
  return (
    <svg width="36" height="36" fill="none" viewBox="0 0 79 95.64">
      <path
        d="M78.36,26.67,40.36.27a1.5,1.5,0,0,0-1.71,0l-38,26.4A1.5,1.5,0,0,0,0,27.9V94.14a1.5,1.5,0,0,0,1.5,1.5h76a1.5,1.5,0,0,0,1.5-1.5V27.9A1.5,1.5,0,0,0,78.36,26.67ZM29,92.64V55.48H50V92.64Zm47,0H53V54a1.5,1.5,0,0,0-1.5-1.5h-24A1.5,1.5,0,0,0,26,54V92.64H3v-64L39.5,3.33,76,28.69Z"
        {...props}
      />
    </svg>
  );
}
