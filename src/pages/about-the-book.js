import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'joseph-gentilini',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | Joseph Gentilini"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Hounded by God`,
                                spanFirst: `A Gay Man's Journey to Self-Acceptance, Love and Relationship`,
                                imgSrc: Book1,
                                id: 'hounded-by-God',
                                content:
                                    `
                                        <p>
                                        In Hounded by God, the author writes about his struggle to integrate his homosexuality with his personality and his Catholic-Christian spirituality. Born in 1948, he grew up in the '50s, '60s, and '70s when homosexuality was considered either a mental illness or a major sin. In 1968, he had his first homosexual experience. Feeling shame and trying to repress his feelings, he spent over six years in therapy.
                                        </p>

                                        <p>
                                        Raised a strict Roman Catholic, Joseph confessed his many "sins" to a priest and attended Mass daily. He felt hopeless in accepting his homosexuality and living happily as a gay man, repeating nightly, "If it gets too bad, I can always kill myself." By 1974, he knew that therapy was not changing his sexual orientation and felt desperate.
                                        </p>

                                        <p>
                                        Joseph experienced God as hounding him to accept his gay identity and to believe that God loves him as he is. His autobiographical journal reveals his gradual awakening to live his vocation, not only as a gay man in relationship with his spouse and with God, but also as someone willing to share his journey with those who struggle with their homosexuality and their faith.
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/hounded-by-god-a-gay-mans-journey-to-self-acceptance-love-and-relationship/',
                                    barnes: 'https://www.barnesandnoble.com/w/hounded-by-god-joseph-gentilini/1137318336?ean=9781648951046',
                                    amazon: 'https://www.amazon.com/Hounded-God-Joseph-Gentilini-ebook/dp/B08CQ17DLR/ref=sr_1_1?dchild=1&keywords=9781648951046&qid=1594396137&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Hounded-God-Journey-Acceptance-Relationship/dp/1648951031/ref=sr_1_1?dchild=1&keywords=9781648951039&qid=1595014997&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/hounded-by-god-joseph-gentilini/1137584779?ean=9781648951039',
                                    booksamillion: 'https://www.booksamillion.com/p/Hounded-God/Joseph-Gentilini/9781648951039?id=8080842261842',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;