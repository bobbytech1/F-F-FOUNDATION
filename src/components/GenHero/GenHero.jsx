import { Box, Text, Stack, Image } from "@chakra-ui/react"
const GenHero = ({ text }) => {
    return ( 
        <>
            <Box>
                <Box className="About-bg bg-center bg-cover bg-no-repeat h-[0vh] xsm:px-[10%] px-[5%] xsm:py-[14%] py-[20%]" id="hero" >
                    <Text className="mxl:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] font-Poppins text-[white] font-[700] flex items-center justify-start">{text}</Text>
                </Box>
            </Box>
        </>
     );
}
 
export default GenHero;