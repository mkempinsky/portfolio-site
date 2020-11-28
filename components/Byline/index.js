import {format, parse} from 'date-fns';
import {getProp} from '../../lib/utils';

const Byline = ({post}) => {
    let date = getProp(['date'], post, '');
    const lastUpdatedFormatted = format(parse(date), 'MMMM d, YYYY');

    return (
        <div className="byline">
            <div style={{marginRight: '10px'}}>Last Updated:</div>{' '}
            <div dangerouslySetInnerHTML={{__html: lastUpdatedFormatted}} />
            <style jsx>
                {`
                    .byline {
                        display: flex;
                        background: var(--secondary-200);
                        padding: 5px;
                        font-size: 12px;
                        align-items: center;
                        justify-content: flex-end;
                    }
                `}
            </style>
        </div>
    );
};
export default Byline;
