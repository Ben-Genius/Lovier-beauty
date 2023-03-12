// HeaderMiddle.tsx
import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem, Button,Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import {BrandSnapchat, BrandInstagram, BrandTiktok,BrandBooking} from 'tabler-icons-react';
import logo from '../../public/logo.png'
const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: rem(56),
       
    },

    links: {
        width: rem(260),

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    social: {
        width: rem(250),

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
           

        },
    },

    burger: {
        marginRight: theme.spacing.md,

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        [theme.fn.smallerThan('sm')]: {
            borderRadius: theme.radius.xs,
            fontSize: theme.fontSizes.md,
            fontWeight: 300,
            color: 'black',
            lineHeight: 2,

        },
    },



}));

interface HeaderMiddleProps {
    links: { link: string; label: string }[];
}

function HeaderMiddle({ links }: HeaderMiddleProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={`hover:bg-purple-400 hover:text-white ${cx(classes.link,{ 'bg-purple-600 text-white md:bg-white md:text-black font-semibold ': active === link.link })}`}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
         
        </Link>
    ));

    return (
       <div>
         <Header height={69} className="pb-4">
            <Container className={`${classes.inner} px-0`}>
                <Group className={classes.links} spacing={5}>
                    {items}
                    
                </Group>
                <Image src={logo} alt="Main logo" className="w-32 ml-10 mt-4 object-cover md:ml-0 " />
                
                <Group spacing={10} className={`${classes.social} md:hidden`} position="right" noWrap>
                    <ActionIcon size="lg" className="hover:bg-white-500  text-yellow-300">
                        <BrandSnapchat size="1.1rem" strokeWidth={2} />
                    </ActionIcon>
                    <ActionIcon size="lg" className="hover:bg-[#00f2ea] text-[#ff0050]">
                        <BrandTiktok size="1.1rem" strokeWidth={2} />
                    </ActionIcon>
                    <ActionIcon size="lg" className="hover:bg-white-500 text-[#d62976]">
                        <BrandInstagram size="1.1rem" strokeWidth={2} />
                    </ActionIcon>
                </Group>
                <Button variant='purple'  className='bg-purple-600 text-white  hover:bg-purple-500 md:hidden'>
                        Book Appointment 🔖  
                    </Button>
                    <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />

            </Container>
            
        </Header>
           {opened && 
             <div className="bg-purple-500 transition duration-700 ease-in-out">
             <ul>
             
                  <li >{items}</li>
                  
              </ul> 
              <hr/>
              <Group spacing={20} className={`${classes.social} mt-4`} position="left" noWrap>
                    <Text className="text-md px-2">Follow Us On</Text>
                  <ActionIcon size="lg" className="hover:bg-white-500  text-yellow-300">
                      <BrandSnapchat size="1.5rem" strokeWidth={2} />
                  </ActionIcon>
                  <ActionIcon size="lg" className="hover:bg-[#00f2ea] text-[#ff0050]">
                      <BrandTiktok size="2.5rem" strokeWidth={2} />
                  </ActionIcon>
                  <ActionIcon size="lg" className="hover:bg-white-500 text-[#d62976]">
                      <BrandInstagram size="1.5rem" strokeWidth={2} />
                  </ActionIcon>
              </Group>
              <hr/>
              <Button variant='purple' size='md' className='bg-pink-500 mt-6 text-white  w-full  '>
                      Book Appointment 🔖  
                  </Button>
          </div>
           }
       </div>
    );
}

export default HeaderMiddle;
