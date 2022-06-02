import styled from "styled-components";

export const GitWrapper = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    padding: 0 1rem;
    h1 {
      font-weight: 600;
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #3d3d3d;
      text-transform: capitalize;
      text-align: center;
    }

    h3 {
      font-weight: 400;
      color: #555555;
      font-size: 1rem;
    }
  }

  .item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem 1rem 3rem;
  }

  .loading-spinner {
    margin-bottom: 10rem;

    h3 {
      color: green;
      font-size: 1rem;
    }

   
  }

  .error {

h3{
  font-weight: 400;
  font-size: 1rem;
  background-color: rgb(255,0,0,0.2);
  color: rgb(255,0,0, .7);
  border: 1px solid rgb(255,0,0,0.2);
  padding: 1rem;
  border-radius: .2rem;
}

button{
  border: none;
  outline: none;
  padding: 1rem 2.4rem;
  background-color: rgb(156, 16, 236);
  color: white;
  border-radius: .2rem;
  margin-top: 2rem;

  :hover{
    background-color: rgb(97, 9, 148);
  }
}
}
`;
