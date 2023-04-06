import { Box, Button, Typography } from '@mui/material';

type ArticleProps = {
  articles: Article[];
  setActiveArticle: (article: Article) => void;
};

export default function Articles({ articles, setActiveArticle }: ArticleProps) {
  const gridContainer2 = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '8px',
  };

  const gridItem = {
    border: '1px solid #e2e2e2',
    padding: '8px',
  };

  return (
    <Box sx={gridContainer2}>
      {articles.map((article) => (
        <Box key={article.title} sx={gridItem}>
          <Typography variant="h5" component="h2" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {article.description}
          </Typography>
          <Button variant="text" color="primary" onClick={() => setActiveArticle(article)}>
            Read More &rarr;
          </Button>
        </Box>
      ))}
    </Box>
  );
}
