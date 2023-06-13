import { Box, Typography, Container, Grid } from '@mui/material'
import React from 'react'

const DefBanner = () => {
  return (
    <>
      <Container sx={{
        mt: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <Typography variant="caption" sx={{ mb: 6, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
          Net Promoter, Net Promoter System, Net Promoter Score, NPS and the NPS-related emoticons are registered trademarks of Bain & Company, Inc., Fred Reichheld and Satmetrix Systems, Inc.
        </Typography>
      </Container>

      <Grid container justifyContent="center" mx={5} my={2} sx={{ flexWrap: 'wrap' }}>
        <Grid item xs={2} sx={{ mb: 4 }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 600, fontSize: 16, color: 'rgb(115, 116, 122)' }}>Community:</Typography>
        </Grid>
        <Grid item xs={10} sx={{ mb: 4 }}>
          <Typography variant='caption' sx={{ fontWeight: 300, fontSize: 16, color: 'rgb(115, 116, 122)', display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
            <li style={{ listStyleType: 'none' }}>Developers</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Our Blog</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </Typography>
        </Grid>

        <Grid item xs={2} sx={{ mb: 4 }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 600, fontSize: 16, color: 'rgb(115, 116, 122)' }}>About Us:</Typography>
        </Grid>
        <Grid item xs={10} sx={{ mb: 4 }}>
          <Typography variant='caption' sx={{ fontWeight: 300, fontSize: 16, color: 'rgb(115, 116, 122)', display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
            <li style={{ listStyleType: 'none' }}>Leadership Team</li>
            <li>Investor Relations</li>
            <li>App Directory</li>
            <li>Newsroom Locations</li>
            <li>Imprint</li>
            <li>Careers</li>
            <li>Sitemap</li>
            <li>Help</li>
          </Typography>
        </Grid>

        <Grid item xs={2} sx={{ mb: 4 }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 600, fontSize: 16, color: 'rgb(115, 116, 122)' }}>Policies:</Typography>
        </Grid>
        <Grid item xs={10} sx={{ mb: 4 }}>
          <Typography variant='caption' sx={{ fontWeight: 300, fontSize: 16, color: 'rgb(115, 116, 122)', display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
            <li style={{ listStyleType: 'none' }}>Leadership Team</li>
            <li>Investor Relations</li>
            <li>App Directory</li>
            <li>Newsroom Locations</li>
            <li>Imprint</li>
            <li>Careers</li>
            <li>Sitemap</li>
            <li>Help</li>
          </Typography>
        </Grid>

        <Grid item xs={2} sx={{ mb: 4 }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 600, fontSize: 16, color: 'rgb(115, 116, 122)' }}>Use Cases:</Typography>
        </Grid>
        <Grid item xs={10} sx={{ mb: 4 }}>
          <Typography variant='caption' sx={{ fontWeight: 300, fontSize: 16, color: 'rgb(115, 116, 122)', display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
            <li style={{ listStyleType: 'none' }}>Leadership Team</li>
            <li>Investor Relations</li>
            <li>App Directory</li>
            <li>Newsroom Locations</li>
            <li>Imprint</li>
            <li>Careers</li>
            <li>Sitemap</li>
            <li>Help</li>
          </Typography>
        </Grid>

        <Grid item xs={2} sx={{ mb: 4 }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 600, fontSize: 16, color: 'rgb(115, 116, 122)' }}></Typography>
        </Grid>
        <Grid item xs={10} sx={{ mb: 4 }}>
          <Typography variant='caption' sx={{ fontWeight: 300, fontSize: 16, color: 'rgb(115, 116, 122)', display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
            <li style={{ listStyleType: 'none' }}>Leadership Team</li>
            <li>Investor Relations</li>
            <li>App Directory</li>
            <li>Newsroom Locations</li>
            <li>Imprint</li>
            <li>Sitemap</li>
            <li>Help</li>
          </Typography>
        </Grid>

        <Grid item xs={2} sx={{ mb: 4 }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 600, fontSize: 16, color: 'rgb(115, 116, 122)' }}></Typography>
        </Grid>
        <Grid item xs={10} sx={{ mb: 4 }}>
          <Typography variant='caption' sx={{ fontWeight: 300, fontSize: 16, color: 'rgb(115, 116, 122)', display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
            <li style={{ listStyleType: 'none' }}>Leadership Team</li>
            <li>Investor Relations</li>
            <li>App Directory</li>
            <li>Careers</li>
            <li>Imprint</li>
            <li>Careers</li>
            <li>Sitemap</li>
            <li>Help</li>
          </Typography>
        </Grid>

      </Grid>
    </>
  )
}

export default DefBanner
