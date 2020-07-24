import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useComics } from '../../hooks'
import { Comic, UseComics } from '../../hooks/Comic'
import UserActions from './UserActions'

import { Ul, Li } from '../UI/Lists'
import Link from '../UI/Link'
import Button from '../UI/Button'
import Grid from '../UI/Grid'
import Loader from '../UI/Loader'

import compose from '../../utils/compose'
import {
  sortingOptions,
  filterComics,
  sortByTitle,
} from '../../utils/sortFilter'

function Master() {
  const { data, isLoading, loadMore }: UseComics = useComics()
  const { url } = useRouteMatch()
  const [sortOpt, setSortOpt] = useState<string>('asc')
  const [filterOpts, setFilterOpts] = useState<string[]>([])

  function handleSort(opt: any) {
    setSortOpt(opt)
  }

  function handleFilter(opt: any) {
    setFilterOpts(opt)
  }

  const dataFiltered = filterComics(filterOpts)
  const dataSorted = sortByTitle(sortingOptions[sortOpt])
  const dataToRender: Comic[] = compose(dataFiltered, dataSorted)(data)

  return (
    <>
      <UserActions sort={handleSort} filter={handleFilter} />
      {!dataToRender.length && isLoading && <Loader big color="secondary" />}
      <Ul aria-label="comic-list">
        {dataToRender.map(({ id, title }: Comic, idx) => (
          <Li paddingY={1} paddingX={5} key={`${idx}/${id}`} aria-label="comic-item">
            <Link fontSize={4} to={`${url}/${id}`}>
              {title}
            </Link>
          </Li>
        ))}
      </Ul>
      {dataToRender.length > 0 && (
        <Grid variant="container" justifyContent="center" marginY={2}>
          <Button isLoading={isLoading} onClick={() => loadMore()}>
            Load More
          </Button>
        </Grid>
      )}
    </>
  )
}

export default Master
