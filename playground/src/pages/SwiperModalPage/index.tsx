import SwiperModal from "@src/components/SwiperModal";
import { FC, useState } from "react";
import { Typography, Stack, Box, Button } from "@mui/material";

const SwiperModalPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("1");

  const dummyItems = [
    {
      id: "1",
      name: "Image 1",
      url: "https://picsum.photos/id/10/800/600",
    },
    {
      id: "2",
      name: "Image 2",
      url: "https://picsum.photos/id/20/800/600",
    },
    {
      id: "3",
      name: "Image 3",
      url: "https://picsum.photos/id/30/800/600",
    },
    {
      id: "4",
      name: "Image 4",
      url: "https://picsum.photos/id/40/800/600",
    },
  ];

  const handleOpen = (id: string) => {
    setActiveId(id);
    setIsOpen(true);
  };

  return (
    <Stack spacing={4} sx={{ p: 3, flex: 1 }}>
      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Image Gallery
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
          {dummyItems.map((item) => (
            <Box
              key={item.id}
              sx={{ cursor: "pointer", textAlign: "center" }}
              onClick={() => handleOpen(item.id)}
            >
              <img
                src={item.url}
                alt={item.name}
                style={{
                  width: 150,
                  height: 100,
                  borderRadius: 4,
                  objectFit: "cover",
                }}
              />
              <Typography variant="body2">{item.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Button variant="contained" onClick={() => handleOpen("1")}>
        Open Swiper Modal
      </Button>

      <SwiperModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={dummyItems}
        activeId={activeId}
      />
    </Stack>
  );
};

export default SwiperModalPage;
