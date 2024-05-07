import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <Box p="4" bg="gray.100" display="flex" gap="4">
      <Link as={RouterLink} to="/">Home</Link>
      <Link as={RouterLink} to="/activities">Activities</Link>
      <Link as={RouterLink} to="/diet">Diet</Link>
      <Link as={RouterLink} to="/funds">Funds</Link>
      <Link as={RouterLink} to="/social-network">Social Network</Link>
      <Link as={RouterLink} to="/integrations">Integrations</Link>
      <Link as={RouterLink} to="/rewards">Rewards</Link>
    </Box>
  );
}

export default Navigation;