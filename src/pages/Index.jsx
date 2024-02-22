import React, { useState } from "react";
import { Box, Container, Heading, Text, VStack, Input, Button, Select, useToast, Image, HStack, Icon } from "@chakra-ui/react";
import CountryCodeSelect from "../components/CountryCodeSelect";
import { FaGlobe, FaMicrophone, FaPhone, FaPhoneSlash, FaPlay } from "react-icons/fa";

const Index = () => {
  const [language, setLanguage] = useState("en");
  const [isCalling, setIsCalling] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const toast = useToast();

  const handleCallClick = () => {
    if (isCalling) {
      toast({
        title: "Call Ended.",
        description: "The call has been successfully disconnected.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Call Started.",
        description: "You're now connected. Start speaking.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsCalling(!isCalling);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBjb21tdW5pY2F0aW9ufGVufDB8fHx8MTcwODU3MjA0MHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="Global Communication" />
        <Heading as="h1" size="xl">
          Real-time Call Translator
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Connect with anyone across the globe, no matter the language barrier.
        </Text>
        <Box w="100%">
          <HStack>
            <Icon as={FaGlobe} w={8} h={8} color="blue.500" />
            <Select placeholder="Select Language" value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
              <option value="zh">Chinese</option>
            </Select>
          </HStack>
        </Box>
        <HStack w="100%">
          <CountryCodeSelect selectedCode={countryCode} onCodeChange={(e) => setCountryCode(e.target.value)} />
          <Input placeholder="Enter phone number" isDisabled={isCalling} />
        </HStack>
        <Button leftIcon={isCalling ? <FaPhoneSlash /> : <FaPhone />} colorScheme={isCalling ? "red" : "green"} onClick={handleCallClick} isFullWidth>
          {isCalling ? "End Call" : "Start Call"}
        </Button>
        <HStack>
          <Button leftIcon={<FaMicrophone />} colorScheme="purple" isDisabled={!isCalling}>
            Speak
          </Button>
          <Button leftIcon={<FaPlay />} colorScheme="orange" isDisabled={!isCalling}>
            Play Translation
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
