import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => {
    return (
            <div className="spinner-loading">
                <Spinner animation="border" role="status" variant="light">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
    )
}