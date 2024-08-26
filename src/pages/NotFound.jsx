import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='text-center pt-44'>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" >
                <Button variant="destructive" className='mt-5 text-lg px-5' ><ArrowLeft size={20} className='mr-2'/>   Go to Home Page</Button>
            </Link>
        </div>
    );
}

export default NotFound;
