import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book-min.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} alt="book-img"/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            In Hounded by God, the author writes about his struggle to integrate his homosexuality with his personality and his Catholic-Christian spirituality. Born in 1948, he grew up in the '50s, '60s, and '70s when homosexuality was considered either a mental illness or a major sin. In 1968, he had his first homosexual experience. Feeling shame and trying to repress his feelings, he spent over six years in therapy.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook