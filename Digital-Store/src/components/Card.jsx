export function Card(props) {
    return(
        <div className={'w-[292px] h-[439px]'}>
            <div>
                <span>{props.discountPercent}% OFF</span>
                <img src="src\assets\image\Produto2.png" alt="Tenis" />
            </div>
            <div>
                <span>{props.category}</span>
                <p>{props.productName}</p>
                <span className="line-through">{props.discountPrice}</span>
                <span>{props.price}</span>
            </div>
        </div>
    );
}

