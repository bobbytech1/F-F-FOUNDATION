import {Box, Text, Stack} from "@chakra-ui/react";
const Copyright = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <>
            <Box className="flex justify-center items-center mt-[70px]">
                <Text className="text-center text-[14px] font-Poppins font-[400] text-white">Copyright &copy; {currentYear} All rights reserved | First Floor Foundation</Text>
            </Box>
        </>
     );
}
 
export default Copyright;