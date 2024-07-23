import { useParams } from 'react-router-dom';
import articles from './Article-content';
import NotFoundPage from './NotFoundPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CommentsList from '../components/Comments';

const ArticlePage = () => {
    const [articleInfo, setAritcleInfo] = useState({upvote : 0,comments:[]});
    const {articleId} = useParams();

    useEffect(()=>{
        const loadArticleInfo = async () => {
            console.log(articleId);
            const response = await axios.get(`/api/articles/${articleId}`);
            //  const response = await axios.get(`/hello`);
            const newArticleInfo = response.data;
            // console.log(newArticleInfo);
            setAritcleInfo(newArticleInfo);
        }
        loadArticleInfo();
    },[]);
    const article = articles.find(article => article.name === articleId);
    // console.log(articleInfo);
    if(!article){
        return <NotFoundPage/>
    }

    return (
        <>
        <h1>{article.title}</h1>
        <p>This article has {articleInfo.upvote} upvotes</p>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments}/>
        </>
    );
}

export default ArticlePage;