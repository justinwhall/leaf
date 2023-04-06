/* eslint-disable @next/next/no-img-element */
import { Box, Button, Typography } from '@mui/material';

type ArticleSingleProps = {
  article: Article;
  setActiveArticle: (article: Article | null) => void;
};

export default function ArticleSingle(
  { article, setActiveArticle }: ArticleSingleProps,
) {
  return (
    <Box>
      <Typography variant="h3" color="dkBlue" component="h2" gutterBottom>
        {article.title}
      </Typography>
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%' }} />
      ) : null}
      <Typography variant="body1" gutterBottom>
        {article.content}
      </Typography>
      <Button variant="text" color="primary" onClick={() => setActiveArticle(null)}>
        &larr; Back to Articles
      </Button>
    </Box>
  );
}
