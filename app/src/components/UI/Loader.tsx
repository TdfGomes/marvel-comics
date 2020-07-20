import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const loading = keyframes`
0%{
    box-shadow: 0 -0.83rem 0 -0.4rem, 0 -0.83rem 0 -0.42rem, 0 -0.83rem 0 -0.44rem, 0 -0.83rem 0 -0.46rem, 0 -0.83rem 0 -0.477rem;
}
5%,
  95%{
    box-shadow: 0 -0.83rem 0 -0.4rem, 0 -0.83rem 0 -0.42rem, 0 -0.83rem 0 -0.44rem, 0 -0.83rem 0 -0.46rem, 0 -0.83rem 0 -0.477rem;
  }
10%,
  59%{
    box-shadow: 0 -0.83rem 0 -0.4rem, -0.087rem -0.825rem 0 -0.42rem, -0.173rem -0.812rem 0 -0.44rem, -0.256rem -0.789rem 0 -0.46rem, -0.297rem -0.775rem 0 -0.477rem;
  }
20%{
  box-shadow: 0 -0.83rem 0 -0.4rem, -0.338rem -0.758rem 0 -0.42rem, -0.555rem -0.617rem 0 -0.44rem, -0.671rem -0.488rem 0 -0.46rem, -0.749rem -0.34rem 0 -0.477rem;
  }
38%{
  box-shadow: 0 -0.83rem 0 -0.4rem, -0.377rem -0.74rem 0 -0.42rem, -0.645rem -0.522rem 0 -0.44rem, -0.775rem -0.297rem 0 -0.46rem, -0.82rem -0.09rem 0 -0.477rem;
  }
100%{
  box-shadow: 0 -0.83rem 0 -0.4rem, 0 -0.83rem 0 -0.42rem, 0 -0.83rem 0 -0.44rem, 0 -0.83rem 0 -0.46rem, 0 -0.83rem 0 -0.477rem;
  }
`


const Loader = styled('div')`
  color: #ffffff;
  font-size: 1rem;
  text-indent: -9999rem;
  overflow: hidden;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: relative;
  transform: translateZ(0);
  animation: ${loading} 1.7s infinite ease, ${rotate} 1.7s infinite ease;
`

export default Loader
