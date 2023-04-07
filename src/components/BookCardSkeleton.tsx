import { CardBody, Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const BookCardSkeleton = () => {
  return (
    <Card maxHeight="250px" direction="row" overflow="hidden" variant="outline">
      <Skeleton height="250px" width="100%" maxW="100px" />
      <CardBody>
        <SkeletonText />
        <SkeletonText py={5} />
      </CardBody>
    </Card>
  );
};

export default BookCardSkeleton;
