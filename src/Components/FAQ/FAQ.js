import React from 'react';

function FAQ(props) {
    return (
        <div className='row mx-4 my-4'>

<div className='col-12 col-md-6 col-lg-4 mt-5'> 
            <div className="mx-2"><img className=' img-fluid me-2' src="/img/Questions-bro.png" alt="" /></div>
        </div>
        <div className='col-12 col-md-6 col-lg-8 '> 
        
            <h3 className='text-primary'>#1 what is cors?  </h3>
            <p><b>Ans : </b>  Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. </p>
            
            <h3 className='text-primary'>#2 Why are you using firebase? What other options do you have to implement authentication?  </h3>
            <p><b>Ans : </b>  Give users a quick, intuitive sign-in process with Firebase Authentication. Allow users to sign in to your app with their Facebook, Twitter, Google, or GitHub account with less than 5 minutes of work. Track each step of your onboarding flow to improve the experience. Use Google Analytics for Firebase to log events at every step of your onboarding flow, create funnels to see where users are dropping off, and use Remote Config to make changes to your app to see how it affects conversions. </p>
            Authentication Options are
            <ul>  
                <li>Google </li>
                <li>Apple </li>
                <li>Facebook </li>
                <li>Twitter </li>
                <li>GitHub </li>
            </ul>
                

           
        </div>
        
        <div className='col-12'>

        <h3 className='text-primary'>#3 How does the private route work?  </h3>
            <p><b>Ans : </b>  The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            
            <h3 className='text-primary'>#4 What is Node? How does Node work?  </h3>
            <p><b>Ans : </b> Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
          
            <p> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request</p>


        </div>
    </div>
    );
}

export default FAQ;