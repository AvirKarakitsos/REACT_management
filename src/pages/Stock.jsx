import { Collapse, Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';


export default function Stock() {
	const [open, setOpen] = useState(false);

    return (
        <Box
			component="main"
			sx={{
				flexGrow: 1,
				p: 4,
				ml: '240px', // largeur du Drawer
				mt: '64px', // hauteur du Header
				backgroundColor: 'background.paper'
			}}
		>
		
			<Box>
				<Box 
					elevation={2}
					sx={{
						px: 2,
						paddingTop: 2,
						display: 'flex',
						justifyContent: 'space-between',
						borderRadius: 3,
						backgroundColor: 'background.default'
					}}
					onClick={() => setOpen((prev) => !prev)}
				>
					<Typography variant='h2'>Ajouter un produit</Typography>
					<ArrowBackIosIcon 
						fontSize='medium'
						 sx={{
							transition: 'transform 1s ease',
							transform: open ? 'rotate(-90deg)' : 'rotate(0deg)',
						 }}
					/>
				</Box>

				<Collapse in={open}>
					<Box
					sx={{
						p: 2,
						border: '1px solid #ccc',
						borderRadius: 2,
						backgroundColor: '#f9f9f9',
					}}
					>
					<Typography variant="body1">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, harum. Enim soluta, hic inventore optio adipisci incidunt! Impedit sapiente voluptatum, sint ea, ab reiciendis rerum doloremque ullam delectus nesciunt neque.
						Tempora eius officia vel alias corrupti. Molestias consectetur vero dolorum nihil officiis nobis, magni corporis! Eligendi aperiam dicta aut nihil unde! Ipsum ex autem tempore explicabo enim! Eos, voluptatem quas?
						Omnis odit facilis aliquam repellendus ut dolorum voluptates sit totam sint velit fuga ipsam numquam veritatis autem porro, quaerat illo placeat labore officiis quibusdam nisi voluptatibus! Hic accusamus adipisci vitae?
						Necessitatibus, commodi eligendi. Ullam officia possimus doloribus sint. Natus commodi recusandae dolorum id hic, dolor quos distinctio, maxime excepturi explicabo porro cum placeat sapiente facere molestiae laudantium corporis totam vitae!
						Ad veritatis, velit nulla doloribus veniam officiis mollitia ducimus voluptas deleniti officia iure sed assumenda dolore! Assumenda, cumque! Quod cum quaerat, officia quos omnis placeat facere modi corporis exercitationem. Assumenda.
						Animi a voluptatum neque qui tenetur explicabo at deleniti optio sed. Magnam dolorum tenetur adipisci nemo? Dolore, hic. Sit praesentium repellat et alias deleniti. Repellat totam magnam earum similique et?
						Quo quis neque vero numquam odio quod, perspiciatis dicta voluptatibus impedit reiciendis doloremque officia nobis delectus qui maxime minus nulla quae possimus repudiandae eius! Maiores, voluptas error. At, ducimus ullam.
						Eum magni facilis, in illo inventore blanditiis consequuntur tenetur veritatis quae fuga quam sint doloribus repudiandae, architecto deleniti ipsum consequatur rerum possimus nemo nesciunt odio. Aliquid ullam incidunt nulla fugiat?
						Nobis, repellat nesciunt minus ratione esse maiores repudiandae nam consequatur fugit nostrum quos mollitia, ipsum debitis ab deleniti accusantium assumenda? Odit nulla esse dolore quisquam? Explicabo corrupti consequatur ullam? Possimus!
					</Typography>
					</Box>
				</Collapse>
			</Box>


        </Box>
    );
}