import styled from "@emotion/styled"

const Result = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado
  return (
    <Result>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="img crypto" />  
      <div>
        <Precio>Price: <span>{PRICE}</span></Precio>  
        <Texto>High Day: <span>{HIGHDAY}</span></Texto>  
        <Texto>Low Day: <span>{LOWDAY}</span></Texto>  
         <Texto>Last 24H Variation: <span>{CHANGEPCT24HOUR}</span></Texto>  
        <Texto>Last Update: <span>{LASTUPDATE}</span></Texto> 
      </div>
       
    </Result>
  )
}

export default Resultado