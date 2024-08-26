import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignUp, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, X, PenBox } from 'lucide-react'


const Header = () => {
    const [showSingIn, setShowSingIn] = useState(false);
    const [showSignUp, setShowSingUp] = useState(false);

    const [search, setSearch] = useSearchParams();
    const { user } = useUser();

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowSingIn(false);
            setShowSingUp(false);
            setSearch({})
        }
    }

    useEffect(() => {
        if (search.get("sign-in")) {
            setShowSingIn(true);
        }
        if (search.get('sign-up')) {
            setShowSingUp(true);
        }
    }, [search])



    return (
        <>
            <nav className='py-4 flex justify-between items-center'>
                <Link to="/">
                    <div className='flex items-center'>
                        <img src='logo.png' className='h-12 mt-2 hidden sm:block  ' />
                        <img src='logo1.png' className='h-12  sm:hidden ' />
                    </div>
                </Link>

                <div className='flex gap-8'>
                    <SignedOut>
                        <Button variant="outline" size="lg" onClick={() => { setShowSingIn(true) }}>Login</Button>
                    </SignedOut>
                    <SignedIn>
                        {user?.unsafeMetadata?.role === "recruiter" && (<Link to="/post-job">
                            <Button variant="destructive" className="rounded-full" >
                                <PenBox size={20} className='mr-2' />
                                Post a Job
                            </Button>
                        </Link>)}
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                },
                            }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label='My Jobs'
                                    labelIcon={<BriefcaseBusiness size={15} />}
                                    href='/my-jobs'
                                />
                                <UserButton.Link
                                    label='Saved Jobs'
                                    labelIcon={<Heart size={15} />}
                                    href='/saved-jobs'
                                />
                                <UserButton.Action label="manageAccount" />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>

                </div>
            </nav>
            {
                showSingIn && <div className=' fixed bg-black inset-0 flex justify-center items-center bg-opacity-50'
                    onClick={handleOverlayClick}
                >
                    <div className='relative p-1'>
                        <button
                            onClick={() => setShowSingIn(false)}
                            className=" z-50 absolute top-4 right-5 "
                        >
                            <X />
                        </button>
                        <SignIn
                            signUpForceRedirectUrl='/onboarding'
                            fallbackRedirectUrl='/onboarding'
                            signUpUrl='?sign-up=true.'

                        />
                    </div>


                </div>
            }
            {
                showSignUp && <div className=' fixed bg-black inset-0 flex justify-center items-center bg-opacity-50'
                    onClick={handleOverlayClick}
                >
                    <div className='relative p-1'>
                        <button
                            onClick={() => setShowSingUp(false)}
                            className=" z-50 absolute top-4 right-5 "
                        >
                            <X />

                        </button>
                        <SignUp
                            signUpForceRedirectUrl='/onboarding'
                            fallbackRedirectUrl='/onboarding'
                            signInUrl='?sign-in=true'
                        >

                        </SignUp>
                    </div>
                </div>
            }
        </>
    )
}

export default Header
