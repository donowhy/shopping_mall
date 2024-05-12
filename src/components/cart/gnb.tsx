import {Link} from "react-router-dom";

const Gnb = () => (
    <nav className="gnb">
        <ul홈
            <li><Link to="/"></Link></li>
            <li><Link to="/products">상품목록</Link></li>
            <li><Link to="/cart">장바구니</Link></li>
        </ul>
    </nav>
)

export default Gnb;