import React from 'react'
import AuthorImg from '../../static/author/author-profile.png'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        Joseph Gentilini and his spouse, Leo Radel, were both born in Columbus, Ohio; Joe in 1948 and Leo in 1950. Ironically, they both attended the same Catholic elementary school, although they did not know each other then. Joseph always wanted to be in a career that involved helping others. He earned his undergraduate degree in 1970 from the Ohio Dominican College (now University) in social welfare. 
                        </p>

                        <h1 className="author-name-tag">
                            <span>Joseph</span>
                            <span>Gentilini</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;