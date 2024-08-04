import { Box } from "@chakra-ui/react";

export function NextArrow({ className, style, onClick }) {
  return (
    <>
      <Box
        className={className}
        onClick={onClick}
        position="absolute"
        top="50%"
        right="-50px"
        transform="translate(0, -50%)"
        bg="#046ba2"
        p="5"
        borderRadius="full"
        cursor="pointer"
        _hover={{ bg: "blue.700" }}
        zIndex="-999"
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      />
    </>
  );
}

export function PrevArrow({ className, style, onClick }) {
  return (
    <>
      <Box
        className={className}
        onClick={onClick}
        position="absolute"
        top="50%"
        left="-50px"
        transform="translate(0, -50%)"
        bg="#046ba2"
        p="5"
        fontSize="50px"
        borderRadius="full"
        cursor="pointer"
        _hover={{ bg: "blue.700" }}
        zIndex="-999"
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      />
    </>
  );
}
