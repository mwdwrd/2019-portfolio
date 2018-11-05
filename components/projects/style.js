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
  width: 100%;
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
`

export const ProjectWrapper = styled.li`
  width: 100%;
  margin-bottom: 16px;

  &:nth-child(2n - 1) {
    margin-top: 0;
  }
`
