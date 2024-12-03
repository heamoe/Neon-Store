import React from 'react'
import Image from "next/image";

const Header = () => {
    return (
        <header className="header">
            Search
            <div className="header-wrapper">
                FileUploader
                <form>
                    <button type="submit" className="sign-out-button">
                        <Image src="/assets/icons/logout.svg" alt="sign out" width={24} height={24} className="w-7" />
                    </button>
                </form>
            </div>
        </header>
    )
}
export default Header
