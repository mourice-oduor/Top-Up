import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const ErrorMessage = ({ variant = 'info', children }) => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant={variant} 
                onClose={() => setShow(false)} dismissible
                style={{ fontSize: 20, width: '50%', alignItems: 'center', margin: 'auto', color: 'orangered' }}>
                <strong>{children}</strong>
            </Alert>
        );
    }
    return <Button className='close' onClick={() => setShow(true)}>Show Alert</Button>;
};

export default ErrorMessage;
