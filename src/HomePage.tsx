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
    Menu,
    MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import {
    TwidereLogo,
    TwidereTextIcon,
    VisionIcon,
    MailIcon,
    GithubIcon,
    TwitterIcon,
    SujitechIcon,
    ArrowDropDownIcon,
} from './assets/iconSvg'
import { ImgSvg_1, ImgSvg_2, ImgSvg_3 } from './assets/imgSvg'
import classNames from 'classnames'
import { withTranslation, TFunction } from 'react-i18next'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: '3rem 3rem 1rem 3rem',
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
            height: ({ screenWidth }: { screenWidth: number }) =>
                screenWidth > 750 ? 1120 : (screenWidth / 750) * 1120,
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
                fontSize: 34,
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
        featureTitle: {
            fontWeight: 600,
            maxWidth: '340px',
        },
        featureText: {
            fontSize: '1.3rem',
            maxWidth: '420px',
        },
        featureBox: {
            maxWidth: '90%',
            marginBottom: theme.spacing(8),
        },
        futureWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            border: '4px solid #B1A6DC',
            borderRadius: '1rem',
            width: '80%',
            [theme.breakpoints.down('md')]: {
                width: '90%',
                justifyContent: 'center',
            },
            maxWidth: 1142,
            padding: '1rem',
        },
        futureTitle: {
            fontWeight: 500,
        },
        futureIntro: {
            fontSize: '1.3rem',
        },
        futureButton: {
            border: '1px solid #F7B643',
            borderRadius: 13,
            width: 170,
            height: 45,
            background: '#F7B643',
            color: '#fff',
            marginLeft: '2.5rem',
            marginTop: '2rem',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            '&:hover': {
                backgroundColor: '#F7B643',
                color: '#FFF',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
                marginTop: '1rem',
            },
        },
        contactWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '80%',
            [theme.breakpoints.down('md')]: {
                width: '90%',
            },
            maxWidth: 1142,
        },
        contactBox: {
            width: 170,
            marginTop: '5rem',
            [theme.breakpoints.down('sm')]: {
                marginTop: '2rem',
            },
        },
        contactText: {
            letterSpacing: 3,
        },
        footer: {
            width: '80%',
            [theme.breakpoints.down('md')]: {
                width: '90%',
            },
        },
        arrowDropDownIcon: {
            fontSize: '28px !important',
        },
    }),
)

function HomePage({ t }: { t: TFunction }) {
    const theme = useTheme()
    const xsMatched = useMediaQuery(() => theme.breakpoints.down('sm'))
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null)
    const screenWidth = window.innerWidth
    const classes = useStyles({ screenWidth })

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
            <Typography variant={xsMatched ? 'h5' : 'h4'} className="text-gray-800 pt-4 pb-16">
                Great Features Of Twidere X
            </Typography>
            <section className="flex justify-center items-center flex-wrap">
                <ImgSvg_1
                    className="max-w-full"
                    width={screenWidth > 722 ? 722 : screenWidth}
                    height={screenWidth > 722 ? 722 : (720 * screenWidth) / 722}
                />
                <Box className={classes.featureBox}>
                    <Typography
                        variant={xsMatched ? 'h5' : 'h4'}
                        className={'text-gray-800 pt-4 ' + classes.featureTitle}>
                        可定制的主界⾯
                    </Typography>
                    <Typography variant="body1" className={'text-gray-800 pt-4 ' + classes.featureText}>
                        Twidere X 主界⾯的标签⻚可以根据需要进⾏定制，将不必要的标签⻚去除，让界⾯适合⾃⼰并保持简洁。
                    </Typography>
                </Box>
            </section>
            <section className="flex justify-center items-center flex-wrap-reverse">
                <Box className={classes.featureBox}>
                    <Typography
                        variant={xsMatched ? 'h5' : 'h4'}
                        className={'text-gray-800 pt-4 ' + classes.featureTitle}>
                        同⼀时间线上查看多帐号消息
                    </Typography>
                    <Typography variant="body1" className={'text-gray-800 pt-4 ' + classes.featureText}>
                        Twidere X 完美⽀持多帐号切换，Twidere X 也⽀持在同⼀时间线
                        上不切换帐号就能查看多个帐号时间轴消息，省去繁琐的账户切换。
                    </Typography>
                </Box>
                <ImgSvg_2
                    width={screenWidth > 698 ? 698 : screenWidth}
                    height={screenWidth > 698 ? 698 : (608 * screenWidth) / 698}
                />
            </section>
            <section className="flex justify-center items-center flex-wrap">
                <ImgSvg_1
                    width={screenWidth > 722 ? 722 : screenWidth}
                    height={screenWidth > 722 ? 720 : (720 * screenWidth) / 722}
                />
                <Box className={classes.featureBox}>
                    <Typography
                        variant={xsMatched ? 'h5' : 'h4'}
                        className={'text-gray-800 pt-4 ' + classes.featureTitle}>
                        ⾼度⼈性化的⾃定义设置
                    </Typography>
                    <Typography variant="body1" className={'text-gray-800 pt-4 ' + classes.featureText}>
                        除了字体以及图片的自由设置，Twidere X
                        还能自定义按钮摆放，主题颜色及发送方式（例如：回车发送消息）
                    </Typography>
                </Box>
            </section>
            <section className={classes.futureWrapper}>
                <Box className={xsMatched ? 'mb-5' : 'mb-10'}>
                    <Typography
                        variant={xsMatched ? 'h4' : 'h2'}
                        component="h1"
                        className={`text-gray-800 ${xsMatched ? 'pl-6 pt-4' : 'pl-10 pt-8'} ` + classes.futureTitle}>
                        Coming Soon
                    </Typography>
                    <Typography
                        variant="body1"
                        className={`text-gray-800 pt-6 ${xsMatched ? 'pl-6' : 'pl-10'} ` + classes.futureIntro}>
                        更多功能还在开发，
                    </Typography>
                    <Typography
                        variant="body1"
                        className={`text-gray-800 ${xsMatched ? 'pl-6' : 'pl-10'} ` + classes.futureIntro}>
                        访问我们的Blog查看我们的计划和很棒的内容！
                    </Typography>
                    {xsMatched ? null : (
                        <Button className={classes.futureButton} variant="contained">
                            View Blog
                        </Button>
                    )}
                </Box>
                <Box className="max-w-full flex flex-col items-center">
                    <ImgSvg_3
                        className="max-w-full"
                        height={screenWidth > 407 * 0.8 ? 356 * 0.8 : (356 * screenWidth) / (407 * 0.8)}
                    />
                    {xsMatched ? (
                        <Button className={classes.futureButton} variant="contained">
                            View Blog
                        </Button>
                    ) : null}
                </Box>
            </section>
            <section className={classes.contactWrapper}>
                <Box className={'mr-12 ' + classes.contactBox}>
                    <Typography variant="body1" className={'text-gray-400 ' + classes.contactText}>
                        联系我们
                    </Typography>
                    <div className="flex justify-between mt-6">
                        <MailIcon className="cursor-pointer" />
                        <GithubIcon className="cursor-pointer" />
                        <TwitterIcon className="cursor-pointer" />
                    </div>
                </Box>
                <Box className={classes.contactBox}>
                    <Typography variant="body1" className={'text-gray-400 ' + classes.contactText}>
                        赞助商
                    </Typography>
                    <SujitechIcon className="mt-6" />
                </Box>
            </section>
            <footer
                className={
                    'flex justify-between items-center flex-wrap mt-12 py-6 border-gray-300 border-t border-solid ' +
                    classes.footer
                }>
                <Button variant="text" className="mr-16" onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <Box className="flex items-baseline">
                        <span>简体中文</span>
                        <ArrowDropDownIcon className="ml-1" />
                    </Box>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}>
                    <MenuItem onClick={() => setAnchorEl(null)}>简体中文</MenuItem>
                    <MenuItem onClick={() => setAnchorEl(null)}>English</MenuItem>
                </Menu>
                <Typography variant="body1" className={'text-gray-400 pt-2 pl-2 '}>
                    Twidere Website is maintained by DimensionDev.
                </Typography>
            </footer>
        </Box>
    )
}

export default withTranslation()(HomePage)
