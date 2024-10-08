'use client'

import { Box, Breadcrumbs, FormControl, Grid, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material'
import CardCheckPump from '@views/pump/CardCheckPump'
import PumpChart from '@views/pump/PumpChart'
import { useState } from 'react'

export default function Page() {
  const [gr, setGr] = useState(1)

  const handleChange = event => {
    setGr(event.target.value)
  }

  return (
    <section>
      <div className='mb-6'>
        <Breadcrumbs aria-label='breadcrumb'>
          <Typography>Dashboard</Typography>
          <Link href='/pump'>Pump</Link>
        </Breadcrumbs>
      </div>
      <Box
        sx={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          display: 'flex',
          width: '100%',
          scrollBehavior: 'smooth'
        }}
      >
        <Grid container spacing={2} direction='row' wrap='nowrap'>
          {[...Array(12)].map((_, index) => (
            <Grid key={index} item sm={6} md={4} sx={{ minWidth: 180 }}>
              <CardCheckPump />
            </Grid>
          ))}
        </Grid>
      </Box>
      <FormControl className='mt-8' fullWidth>
        <InputLabel id='demo-simple-select-label'>Greenhouse</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={gr}
          onChange={handleChange}
          label='Greenhouse'
        >
          <MenuItem value={1}>Greenhouse 1</MenuItem>
          <MenuItem value={2}>Greenhouse 2</MenuItem>
          <MenuItem value={3}>Greenhouse 3</MenuItem>
          <MenuItem value={4}>Greenhouse 4</MenuItem>
          <MenuItem value={5}>Greenhouse 5</MenuItem>
          <MenuItem value={6}>Greenhouse 6</MenuItem>
          <MenuItem value={7}>Greenhouse 7</MenuItem>
          <MenuItem value={8}>Greenhouse 8</MenuItem>
          <MenuItem value={9}>Greenhouse 9</MenuItem>
          <MenuItem value={10}>Greenhouse 10</MenuItem>
          <MenuItem value={11}>Greenhouse 11</MenuItem>
          <MenuItem value={12}>Greenhouse 12</MenuItem>
        </Select>
      </FormControl>
      <Grid item xs={12} className='mt-4'>
        <PumpChart />
      </Grid>
    </section>
  )
}
