import Header from '../../components/Header.tsx'
import  './NotFoundPage.css'

function NotFound( {cart} ) {
    return (
        <>
            <Header cart={cart} />
            <div className="notfound-container">
                Page Not Found
            </div>
        </>
    )
}

export default NotFound;