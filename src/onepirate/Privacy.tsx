import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from './modules/components/Markdown';
import Typography from '@mui/material/Typography';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import withRoot from './modules/withRoot';

function Privacy() {
  const [markdown, setMarkdown] = useState('');

  // https://github.com/webpack/webpack/issues/6680
  useEffect(() => {
    import('./modules/views/privacy.md')
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdown(responseText));
  });

  if (!markdown) {
    return <div />;
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom align="center">
            Privacy
          </Typography>
          <Markdown>{markdown}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
