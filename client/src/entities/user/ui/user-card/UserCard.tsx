import { Avatar, Box, Text } from "@chakra-ui/react";
import { FC } from "react";

import { User } from "../../model/types";

interface UserCardProps {
  user: User;
  onClose: () => void;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  const handleClick = async () => {
    console.log("click");
  };

  return (
    <Box
      display="flex"
      w="100%"
      px={3}
      py={2}
      bg="#E8E8E8"
      alignItems="center"
      borderRadius="lg"
      color="black"
      cursor="pointer"
      transition="all .2s ease"
      userSelect="none"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      onClick={handleClick}
    >
      <Avatar
        mr="2"
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.image}
      />
      <Box mr="auto">
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserCard;
