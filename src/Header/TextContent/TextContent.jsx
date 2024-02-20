import './style.css';

export default function TextContent({content, index}){
    var isEmptyContent = content !== '' || content !== null || content !== undefined ? isEmptyContent = true : isEmptyContent = false;
    var MyClass = '';

    if(index === 0) MyClass = 'par-content';
    if(index === 1) MyClass = 'par-content-2';
    if(index === 2) MyClass = 'par-content-3';

    return(
        <span className="paragraphs">
            {
                isEmptyContent && (
                    <p className={MyClass}>
                        {content}
                    </p>
                )
            }
        </span>
    )
}