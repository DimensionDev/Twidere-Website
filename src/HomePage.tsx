import { useState } from 'react'
import {
    makeStyles,
    createStyles,
    Typography,
    Button,
    Box,
    Drawer,
    useTheme,
    useMediaQuery,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import { TwidereLogo, TwidereTextIcon, VisionIcon } from './assets/logo'
import classNames from 'classnames'
import { withTranslation, TFunction } from 'react-i18next'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: '3rem',
            [theme.breakpoints.down('sm')]: {
                padding: 0,
            },
        },
        button: {
            border: '1px solid #1D80F5',
            color: '#1D80F5',
            padding: '10px 15px',
            [theme.breakpoints.down('sm')]: {
                margin: '16px',
            },
        },
        main: {
            background: `url('pattern.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            height: 768,
            width: '100%',
            maxWidth: 1396,
            color: '#fff',
            [theme.breakpoints.down('md')]: {
                height: 578,
            },
        },
        mainMobile: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: `url('pattern-mobile.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            height: 720,
            width: '100%',
            color: '#fff',
            padding: '3rem',
        },
        drawer: {
            width: 240,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 240,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        nav: {
            width: '66.7%',
            marginBottom: '1.5rem',
            [theme.breakpoints.down('md')]: {
                width: '100%',
            },
            [theme.breakpoints.down('sm')]: {
                padding: '0rem 2rem',
                paddingTop: '1rem',
                marginBottom: '1rem',
            },
        },
        banner: {
            width: 750,
            marginTop: '13rem',
            marginLeft: '7rem',
            [theme.breakpoints.down('md')]: {
                width: 600,
                marginTop: '8rem',
                marginLeft: '5rem',
            },
        },
        bannerTitle: {
            fontSize: 72,
            [theme.breakpoints.down('md')]: {
                fontSize: 56,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 44,
                fontWeight: 'bolder',
            },
        },
        bannerIntro: {
            fontSize: 24,
            [theme.breakpoints.down('md')]: {
                fontSize: 18,
            },
            [theme.breakpoints.down('sm')]: {
                fontWeight: 'normal',
                lineHeight: 2,
            },
        },
        downloadWrapper: {
            marginTop: '3rem',
            marginBottom: '1rem',
            [theme.breakpoints.down('md')]: {
                marginTop: '2rem',
                marginBottom: '0.5rem',
            },
        },
        download: {
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            marginRight: '1rem',
            cursor: 'pointer',
            height: 55,
            width: 190,
            [theme.breakpoints.down('md')]: {
                height: 45,
                width: 150,
            },
        },
        fDroid: {
            backgroundImage: `url('f-droid.png')`,
        },
        gPlay: {
            backgroundImage: `url('google-play.png')`,
            marginRight: '0.5rem',
        },
        appStore: {
            backgroundImage: `url('app-store.png')`,
        },
        github: {
            backgroundImage: `url('github.png')`,
            cursor: 'default',
        },
    }),
)

function HomePage({ t }: { t: TFunction }) {
    const classes = useStyles()
    const theme = useTheme()
    const xsMatched = useMediaQuery(() => theme.breakpoints.down('sm'))
    const [open, setOpen] = useState(false)

    return (
        <Box className={'flex flex-col items-center ' + classes.root}>
            <nav className={'flex items-center justify-between ' + classes.nav}>
                <section className="flex items-center">
                    <TwidereLogo
                        className={xsMatched ? 'mr-2' : 'mr-4'}
                        width={xsMatched ? 30 : undefined}
                        height={xsMatched ? 20 : undefined}
                    />
                    <TwidereTextIcon
                        className={xsMatched ? 'mr-3' : 'mr-4'}
                        width={xsMatched ? 95 : undefined}
                        height={xsMatched ? 25 : undefined}
                    />
                    <VisionIcon
                        className={xsMatched ? 'mr-2' : 'mr-4'}
                        width={xsMatched ? 44 : undefined}
                        height={xsMatched ? 27 : undefined}
                    />
                </section>
                <section className={`flex items-center justify-between w-96 ${xsMatched ? 'flex-row-reverse' : ''}`}>
                    {xsMatched ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={() => setOpen(!open)}
                            //    className={clsx(open && classes.hide)}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    ) : (
                        <>
                            <Typography className="cursor-pointer text-black-">HOME</Typography>
                            <Typography className="cursor-pointer">BLOG</Typography>
                            <Button color="primary" className={classes.button} variant="outlined">
                                <span className="font-bold">Get Twidere X</span>
                            </Button>
                        </>
                    )}
                </section>
            </nav>
            <Drawer
                className={classes.drawer}
                anchor="right"
                variant="persistent"
                open={open}
                classes={{ paper: classes.drawerPaper }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>
                </div>
                <Divider light={true} />
                <List>
                    <ListItem button key={'Home'}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button key={'Blog'}>
                        <ListItemIcon>
                            <BookIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Blog'} />
                    </ListItem>

                    <Button color="primary" className={classes.button} variant="outlined">
                        <span className="font-bold">Get Twidere X</span>
                    </Button>
                </List>
            </Drawer>
            {xsMatched ? (
                <main className={classes.mainMobile}>
                    <Typography className={classes.bannerTitle} variant="h3" component="h3">
                        {t('banner_title')}
                    </Typography>
                    <div className="mb-2" />
                    <Typography className={classes.bannerIntro} variant="h6">
                        没有⼴告，不收费⽤，⽀持开源，兼具丰富功能和⾃定设计
                    </Typography>
                </main>
            ) : (
                <main className={classes.main}>
                    <section className={classes.banner}>
                        <Typography className={classes.bannerTitle} variant="h3" component="h3">
                            可⾃定义且开源的Twitter 客户端
                        </Typography>
                        <div className="mb-2" />
                        <Typography className={classes.bannerIntro} variant="body1">
                            没有⼴告，不收费⽤，⽀持开源，兼具丰富功能和⾃定设计
                        </Typography>
                        <Box className={'flex mb-4 ' + classes.downloadWrapper}>
                            <div className={classNames([classes.fDroid, classes.download])} />
                            <div className={classNames([classes.gPlay, classes.download])} />
                            <div className={classNames([classes.appStore, classes.download])} />
                        </Box>
                        <div className={classNames([classes.github, classes.download])} />
                    </section>
                </main>
            )}
            <Typography variant="body1" className="text-gray-400 pt-16">
                Our Features
            </Typography>
            <Typography variant={xsMatched ? 'h5' : 'h4'} className="text-gray-800 pt-4">
                Great Features Of Twidere X
            </Typography>
        </Box>
    )
}

export default withTranslation()(HomePage)
