import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHeartbeat, FaApple, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={10} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Health Rewards App
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} textAlign="center">
          Earn money while staying healthy! Connect with your HSA/FSA accounts or get cash rewards.
        </Text>
        <Image src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDB8fHx8MTcxNTEyMzIxOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare App Interface" boxSize="300px" objectFit="cover" />
        <Stack direction="column" spacing={4}>
          <FeatureCard icon={FaHeartbeat} title="Stay Active" description="Earn rewards by completing daily physical activities." />
          <FeatureCard icon={FaApple} title="Eat Healthy" description="Get incentives for maintaining a healthy diet." />
          <FeatureCard icon={FaMoneyBillWave} title="Manage Funds" description="Connect with HSA/FSA for financial health benefits." />
        </Stack>
        <Button colorScheme="teal" size="lg">
          Download Now
        </Button>
      </VStack>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <VStack spacing={3} p={5} boxShadow="md" borderRadius="lg" width="100%" align="center">
      <IconComponent size="3em" />
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
