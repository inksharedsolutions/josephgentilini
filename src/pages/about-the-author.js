import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author-profile.png'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title="About the Author | Joseph Gentilini"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    "My gay vocation is to be a gay Catholic man in relationship with my spouse, Leo, and with God within the institutional church.
                                </h4>
                                <span className="ata-span-fx">
                                    Author's Quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Joseph Gentilini and his spouse, Leo Radel, were both born in Columbus, Ohio; Joe in 1948 and Leo in 1950. Ironically, they both attended the same Catholic elementary school, although they did not know each other then. Joseph always wanted to be in a career that involved helping others. He earned his undergraduate degree in 1970 from the Ohio Dominican College (now University) in social welfare.
                            </p>

                            <p>
                            He began his career in 1971 as a vocational rehabilitation counselor for the State of Ohio, helping persons with severe disabilities to become more independent with the goal of competitive employment if they were able. Going to school at night, he obtained his master’s degree from The Ohio State University in 1974 in counseling and guidance. Joseph worked for another four years and then took an educational leave-of-absence for two years to complete his doctoral coursework in community counseling from Ohio University in Athens, Ohio. Returning to work for the state, he completed his dissertation at night, finally graduating in 1982 with his PhD. Joseph is an Ohio Licensed Professional Clinical Counselor, a Licensed Social Worker, and a nationally Certified Rehabilitation Counselor. Joseph retired from his state employment in 2003 and Leo the same year from the United States Postal Service.
                            </p>

                            <p>
                            Joseph met Leo in November of 1981 and they civilly married in 2011. Leo was previously married for twelve years and had three children, now all adults. Joseph and Leo have five grandchildren.
                            </p>

                            <p>
                            Joseph and Leo are active in their respective religious communities. Both help each other to be spiritually connected, not only with within their relationship, but also with God.
                            </p>

                            <p>
                            Joseph journeyed to the Abbey of Gethsemani in Kentucky several times a year beginning in 1971. Here he was able to retreat at Trappist monastery to find some respite (Oasis) from his painful and non-acceptance in society at large (his desert). In 2001, he published an article entitled, The Oasis in my Desert, in a now-defunct publication, Passions: Christian Spirituality from a Gay Perspective. He wrote how the Abbey was influential in helping him to accept his gayness and to connect with God as a gay man. He continues to go there on retreats where he can enter into silence and solitude, and safely surrender himself to God.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Joseph Gentilini</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;