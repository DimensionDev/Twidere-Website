import { useEffect, useState } from 'react'
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
import { ImgFeatureOne, ImgFeatureTwo, ImgFeatureThree, ImgFeatureFour } from './assets/imgSvg'
import classNames from 'classnames'
import { withTranslation, TFunction } from 'react-i18next'
import i18n from './i18n'

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
            width: 270,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 270,
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
                width: 520,
                marginTop: '8rem',
                marginLeft: '3rem',
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
        bannerTitleDesktop: {
            width: '100%',
            [theme.breakpoints.down('md')]: {
                width: '90%',
                fontSize: 42,
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
            [theme.breakpoints.down('sm')]: {
                marginTop: '1rem',
                marginBottom: '0rem',
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
            backgroundPosition: 'top left',
        },
        github: {
            backgroundImage: `url('github.png')`,
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
        featureWrapper: {
            width: '85%',
            marginBottom: '5rem',
            [theme.breakpoints.down('md')]: {
                width: '95%',
                marginBottom: '2rem',
            },
            maxWidth: 1342,
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
            maxWidth: 1142,
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

    useEffect(() => {
        const lang = window.localStorage.getItem('twidere_language')
        console.log(lang, 'twidere_language')
        setTimeout(() => i18n.changeLanguage(lang ? lang : 'zh'), 0)
    }, [])

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
                <section className={`flex items-center justify-end w-96`}>
                    {xsMatched ? (
                        <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={() => setOpen(!open)}>
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    ) : (
                        <>
                            <Typography className="cursor-pointer">{t('link_home')}</Typography>
                            <div className="mr-8" />
                            <Typography className="cursor-pointer">{t('link_blog')}</Typography>
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
                </List>
            </Drawer>
            {xsMatched ? (
                <main className={classes.mainMobile}>
                    <Typography className={classes.bannerTitle} variant="h3" component="h3">
                        <p>{t('banner_title_a')}</p>
                        <p>{t('banner_title_b')}</p>
                    </Typography>
                    <div className="mb-2" />
                    <Typography className={classes.bannerIntro} variant="h6">
                        {t('banner_intro')}
                    </Typography>
                    <Box className={'flex flex-col mb-4 self-start ' + classes.downloadWrapper}>
                        <a className={'mb-4 ' + classNames([classes.fDroid, classes.download])} />
                        <a
                            className={'mb-4 ' + classNames([classes.gPlay, classes.download])}
                            href="https://play.google.com/store/apps/details?id=com.twidere.twiderex"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <a className={'mb-4 ' + classNames([classes.appStore, classes.download])} />
                        <div className={classNames([classes.github, classes.download])} />
                    </Box>
                </main>
            ) : (
                <main className={classes.main}>
                    <section className={classes.banner}>
                        <Typography className={classNames(classes.bannerTitle)} variant="h3" component="h3">
                            <p>{t('banner_title_a')}</p>
                            <p className={classes.bannerTitleDesktop}>{t('banner_title_b')}</p>
                        </Typography>
                        <div className="mb-2" />
                        <Typography className={classes.bannerIntro} variant="body1">
                            {t('banner_intro')}
                        </Typography>
                        <Box className={'flex mb-4 ' + classes.downloadWrapper}>
                            <a className={classNames([classes.fDroid, classes.download])} />
                            <a
                                className={classNames([classes.gPlay, classes.download])}
                                href="https://play.google.com/store/apps/details?id=com.twidere.twiderex"
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                            <a className={classNames([classes.appStore, classes.download])} />
                        </Box>
                        <div className={classNames([classes.github, classes.download])} />
                    </section>
                </main>
            )}
            <Typography variant="body1" className="text-gray-400 pt-16">
                {t('feature_title')}
            </Typography>
            <Typography variant={xsMatched ? 'h5' : 'h4'} className="text-gray-800 pt-4 pb-16">
                {t('feature_intro')}
            </Typography>
            <section className={'flex justify-around items-center flex-wrap ' + classes.featureWrapper}>
                <ImgFeatureOne
                    className="max-w-full"
                    width={screenWidth > 640 ? 640 : screenWidth}
                    height={screenWidth > 640 ? 732 : (732 * screenWidth) / 640}
                />
                <Box className={classes.featureBox}>
                    <Typography
                        variant={xsMatched ? 'h5' : 'h4'}
                        className={'text-gray-800 pt-4 ' + classes.featureTitle}>
                        {t('feature_one_title')}
                    </Typography>
                    <Typography variant="body1" className={'text-gray-800 pt-4 ' + classes.featureText}>
                        {t('feature_one_intro')}
                    </Typography>
                </Box>
            </section>
            <section className={'flex flex-wrap-reverse justify-around items-center ' + classes.featureWrapper}>
                <Box className={classes.featureBox}>
                    <Typography
                        variant={xsMatched ? 'h5' : 'h4'}
                        className={'text-gray-800 pt-4 ' + classes.featureTitle}>
                        {t('feature_two_title')}
                    </Typography>
                    <Typography variant="body1" className={'text-gray-800 pt-4 ' + classes.featureText}>
                        {t('feature_two_intro')}
                    </Typography>
                </Box>
                <ImgFeatureTwo
                    width={screenWidth > 610 ? 610 : screenWidth}
                    height={screenWidth > 610 ? 672 : (672 * screenWidth) / 610}
                />
            </section>
            <section className={'flex justify-around items-center flex-wrap ' + classes.featureWrapper}>
                <ImgFeatureThree
                    width={screenWidth > 610 ? 610 : screenWidth}
                    height={screenWidth > 610 ? 647 : (647 * screenWidth) / 610}
                />
                <Box className={classes.featureBox}>
                    <Typography
                        variant={xsMatched ? 'h5' : 'h4'}
                        className={'text-gray-800 pt-4 ' + classes.featureTitle}>
                        {t('feature_three_title')}
                    </Typography>
                    <Typography variant="body1" className={'text-gray-800 pt-4 ' + classes.featureText}>
                        {t('feature_three_intro')}
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
                        {t('more_under_dev')}
                    </Typography>
                    <Typography
                        variant="body1"
                        className={`text-gray-800 ${xsMatched ? 'pl-6' : 'pl-10'} ` + classes.futureIntro}>
                        {t('more_within_blog')}
                    </Typography>
                    {xsMatched ? null : (
                        <Button className={classes.futureButton} variant="contained">
                            {t('link_view_blog')}
                        </Button>
                    )}
                </Box>
                <Box className="max-w-full flex flex-col items-center">
                    <ImgFeatureFour
                        className="max-w-full"
                        height={screenWidth > 407 * 0.8 ? 356 * 0.8 : (356 * screenWidth) / (407 * 0.8)}
                    />
                    {xsMatched ? (
                        <Button className={classes.futureButton} variant="contained">
                            {t('link_view_blog')}
                        </Button>
                    ) : null}
                </Box>
            </section>
            <section className={classes.contactWrapper}>
                <Box className={'mr-12 ' + classes.contactBox}>
                    <Typography variant="body1" className={'text-gray-400 ' + classes.contactText}>
                        {t('contact_us')}
                    </Typography>
                    <div className="flex justify-between mt-6">
                        <IconButton href="mailto:frog@dimension.im" target="_blank" rel="noopener noreferrer">
                            <MailIcon className="cursor-pointer" />
                        </IconButton>
                        <IconButton
                            className="focus:outline-none"
                            href="https://github.com/TwidereProject"
                            target="_blank"
                            rel="noopener noreferrer">
                            <GithubIcon className="cursor-pointer" />
                        </IconButton>
                        <IconButton href="https://twitter.com/TwidereProject" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className="cursor-pointer" />
                        </IconButton>
                    </div>
                </Box>
                <Box className={classes.contactBox}>
                    <Typography variant="body1" className={'text-gray-400 ' + classes.contactText}>
                        {t('sponsor')}
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
                        <span>{t('language')}</span>
                        <ArrowDropDownIcon className="ml-1" />
                    </Box>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}>
                    <MenuItem
                        onClick={() => {
                            i18n.changeLanguage('zh')
                            window.localStorage.setItem('twidere_language', 'zh')
                            setAnchorEl(null)
                        }}>
                        {t('language_chinese')}
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            i18n.changeLanguage('en')
                            window.localStorage.setItem('twidere_language', 'en')
                            setAnchorEl(null)
                        }}>
                        {t('language_english')}
                    </MenuItem>
                </Menu>
                <Typography variant="body1" className={'text-gray-400 pt-2 pl-2 '}>
                    {t('maintained_by')}
                </Typography>
            </footer>
        </Box>
    )
}

export default withTranslation()(HomePage)
