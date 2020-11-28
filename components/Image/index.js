const placeholder =
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

const Image = (props) => {
    const {src, defer, handleClick, style, className, alt} = props;
    return (
        <img
            onClick={handleClick}
            data-src={defer ? src : null}
            loading={defer && 'lazyel'}
            src={defer ? placeholder : src}
            style={style}
            className={className}
            alt={alt || ''}
        />
    );
};
export default Image;
