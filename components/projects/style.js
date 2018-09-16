import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const Projects = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-column-gap: 16px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const ProjectWrapper = styled.li`
  width: 100%;
  margin-bottom: 16px;
`
