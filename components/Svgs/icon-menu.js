const IconMenu = (props) => {
    return (
        <svg
            fill={props.fill || '#000'}
            viewBox="0 0 80 80"
            width={props.width || '80px'}
            height={props.height || '80px'}>
            <path d="M 10 14 L 10 26 L 70 26 L 70 14 Z M 12 16 L 68 16 L 68 18 C 67.449219 18 67 18.449219 67 19 C 67 19.550781 67.449219 20 68 20 L 68 24 L 12 24 L 12 20 C 12.550781 20 13 19.550781 13 19 C 13 18.449219 12.550781 18 12 18 Z M 16 18 C 15.449219 18 15 18.449219 15 19 C 15 19.550781 15.449219 20 16 20 C 16.550781 20 17 19.550781 17 19 C 17 18.449219 16.550781 18 16 18 Z M 20 18 C 19.449219 18 19 18.449219 19 19 C 19 19.550781 19.449219 20 20 20 C 20.550781 20 21 19.550781 21 19 C 21 18.449219 20.550781 18 20 18 Z M 24 18 C 23.449219 18 23 18.449219 23 19 C 23 19.550781 23.449219 20 24 20 C 24.550781 20 25 19.550781 25 19 C 25 18.449219 24.550781 18 24 18 Z M 28 18 C 27.449219 18 27 18.449219 27 19 C 27 19.550781 27.449219 20 28 20 C 28.550781 20 29 19.550781 29 19 C 29 18.449219 28.550781 18 28 18 Z M 32 18 C 31.449219 18 31 18.449219 31 19 C 31 19.550781 31.449219 20 32 20 C 32.550781 20 33 19.550781 33 19 C 33 18.449219 32.550781 18 32 18 Z M 36 18 C 35.449219 18 35 18.449219 35 19 C 35 19.550781 35.449219 20 36 20 C 36.550781 20 37 19.550781 37 19 C 37 18.449219 36.550781 18 36 18 Z M 40 18 C 39.449219 18 39 18.449219 39 19 C 39 19.550781 39.449219 20 40 20 C 40.550781 20 41 19.550781 41 19 C 41 18.449219 40.550781 18 40 18 Z M 44 18 C 43.449219 18 43 18.449219 43 19 C 43 19.550781 43.449219 20 44 20 C 44.550781 20 45 19.550781 45 19 C 45 18.449219 44.550781 18 44 18 Z M 48 18 C 47.449219 18 47 18.449219 47 19 C 47 19.550781 47.449219 20 48 20 C 48.550781 20 49 19.550781 49 19 C 49 18.449219 48.550781 18 48 18 Z M 52 18 C 51.449219 18 51 18.449219 51 19 C 51 19.550781 51.449219 20 52 20 C 52.550781 20 53 19.550781 53 19 C 53 18.449219 52.550781 18 52 18 Z M 56 18 C 55.449219 18 55 18.449219 55 19 C 55 19.550781 55.449219 20 56 20 C 56.550781 20 57 19.550781 57 19 C 57 18.449219 56.550781 18 56 18 Z M 60 18 C 59.449219 18 59 18.449219 59 19 C 59 19.550781 59.449219 20 60 20 C 60.550781 20 61 19.550781 61 19 C 61 18.449219 60.550781 18 60 18 Z M 64 18 C 63.449219 18 63 18.449219 63 19 C 63 19.550781 63.449219 20 64 20 C 64.550781 20 65 19.550781 65 19 C 65 18.449219 64.550781 18 64 18 Z M 10 34 L 10 46 L 70 46 L 70 34 Z M 12 36 L 68 36 L 68 38 C 67.449219 38 67 38.449219 67 39 C 67 39.550781 67.449219 40 68 40 L 68 44 L 12 44 L 12 40 C 12.550781 40 13 39.550781 13 39 C 13 38.449219 12.550781 38 12 38 Z M 16 38 C 15.449219 38 15 38.449219 15 39 C 15 39.550781 15.449219 40 16 40 C 16.550781 40 17 39.550781 17 39 C 17 38.449219 16.550781 38 16 38 Z M 20 38 C 19.449219 38 19 38.449219 19 39 C 19 39.550781 19.449219 40 20 40 C 20.550781 40 21 39.550781 21 39 C 21 38.449219 20.550781 38 20 38 Z M 24 38 C 23.449219 38 23 38.449219 23 39 C 23 39.550781 23.449219 40 24 40 C 24.550781 40 25 39.550781 25 39 C 25 38.449219 24.550781 38 24 38 Z M 28 38 C 27.449219 38 27 38.449219 27 39 C 27 39.550781 27.449219 40 28 40 C 28.550781 40 29 39.550781 29 39 C 29 38.449219 28.550781 38 28 38 Z M 32 38 C 31.449219 38 31 38.449219 31 39 C 31 39.550781 31.449219 40 32 40 C 32.550781 40 33 39.550781 33 39 C 33 38.449219 32.550781 38 32 38 Z M 36 38 C 35.449219 38 35 38.449219 35 39 C 35 39.550781 35.449219 40 36 40 C 36.550781 40 37 39.550781 37 39 C 37 38.449219 36.550781 38 36 38 Z M 40 38 C 39.449219 38 39 38.449219 39 39 C 39 39.550781 39.449219 40 40 40 C 40.550781 40 41 39.550781 41 39 C 41 38.449219 40.550781 38 40 38 Z M 44 38 C 43.449219 38 43 38.449219 43 39 C 43 39.550781 43.449219 40 44 40 C 44.550781 40 45 39.550781 45 39 C 45 38.449219 44.550781 38 44 38 Z M 48 38 C 47.449219 38 47 38.449219 47 39 C 47 39.550781 47.449219 40 48 40 C 48.550781 40 49 39.550781 49 39 C 49 38.449219 48.550781 38 48 38 Z M 52 38 C 51.449219 38 51 38.449219 51 39 C 51 39.550781 51.449219 40 52 40 C 52.550781 40 53 39.550781 53 39 C 53 38.449219 52.550781 38 52 38 Z M 56 38 C 55.449219 38 55 38.449219 55 39 C 55 39.550781 55.449219 40 56 40 C 56.550781 40 57 39.550781 57 39 C 57 38.449219 56.550781 38 56 38 Z M 60 38 C 59.449219 38 59 38.449219 59 39 C 59 39.550781 59.449219 40 60 40 C 60.550781 40 61 39.550781 61 39 C 61 38.449219 60.550781 38 60 38 Z M 64 38 C 63.449219 38 63 38.449219 63 39 C 63 39.550781 63.449219 40 64 40 C 64.550781 40 65 39.550781 65 39 C 65 38.449219 64.550781 38 64 38 Z M 10 54 L 10 66 L 70 66 L 70 54 Z M 12 56 L 68 56 L 68 58 C 67.449219 58 67 58.449219 67 59 C 67 59.550781 67.449219 60 68 60 L 68 64 L 12 64 L 12 60 C 12.550781 60 13 59.550781 13 59 C 13 58.449219 12.550781 58 12 58 Z M 16 58 C 15.449219 58 15 58.449219 15 59 C 15 59.550781 15.449219 60 16 60 C 16.550781 60 17 59.550781 17 59 C 17 58.449219 16.550781 58 16 58 Z M 20 58 C 19.449219 58 19 58.449219 19 59 C 19 59.550781 19.449219 60 20 60 C 20.550781 60 21 59.550781 21 59 C 21 58.449219 20.550781 58 20 58 Z M 24 58 C 23.449219 58 23 58.449219 23 59 C 23 59.550781 23.449219 60 24 60 C 24.550781 60 25 59.550781 25 59 C 25 58.449219 24.550781 58 24 58 Z M 28 58 C 27.449219 58 27 58.449219 27 59 C 27 59.550781 27.449219 60 28 60 C 28.550781 60 29 59.550781 29 59 C 29 58.449219 28.550781 58 28 58 Z M 32 58 C 31.449219 58 31 58.449219 31 59 C 31 59.550781 31.449219 60 32 60 C 32.550781 60 33 59.550781 33 59 C 33 58.449219 32.550781 58 32 58 Z M 36 58 C 35.449219 58 35 58.449219 35 59 C 35 59.550781 35.449219 60 36 60 C 36.550781 60 37 59.550781 37 59 C 37 58.449219 36.550781 58 36 58 Z M 40 58 C 39.449219 58 39 58.449219 39 59 C 39 59.550781 39.449219 60 40 60 C 40.550781 60 41 59.550781 41 59 C 41 58.449219 40.550781 58 40 58 Z M 44 58 C 43.449219 58 43 58.449219 43 59 C 43 59.550781 43.449219 60 44 60 C 44.550781 60 45 59.550781 45 59 C 45 58.449219 44.550781 58 44 58 Z M 48 58 C 47.449219 58 47 58.449219 47 59 C 47 59.550781 47.449219 60 48 60 C 48.550781 60 49 59.550781 49 59 C 49 58.449219 48.550781 58 48 58 Z M 52 58 C 51.449219 58 51 58.449219 51 59 C 51 59.550781 51.449219 60 52 60 C 52.550781 60 53 59.550781 53 59 C 53 58.449219 52.550781 58 52 58 Z M 56 58 C 55.449219 58 55 58.449219 55 59 C 55 59.550781 55.449219 60 56 60 C 56.550781 60 57 59.550781 57 59 C 57 58.449219 56.550781 58 56 58 Z M 60 58 C 59.449219 58 59 58.449219 59 59 C 59 59.550781 59.449219 60 60 60 C 60.550781 60 61 59.550781 61 59 C 61 58.449219 60.550781 58 60 58 Z M 64 58 C 63.449219 58 63 58.449219 63 59 C 63 59.550781 63.449219 60 64 60 C 64.550781 60 65 59.550781 65 59 C 65 58.449219 64.550781 58 64 58 Z" />
        </svg>
    );
};
export default IconMenu;
