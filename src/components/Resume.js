
// React
import React from 'react';

// MUI 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

// Local
import ResumeCard from './ResumeCard';


// ResumePortfolio: A React component that displays a resume/portfolio.
export default function ResumePortfolio({ profile }) {
    return (
        <Box>
            <Grid container spacing={2}>

                {/* Left Column */}
                <Grid item xs={12} md={4}>

                    {/* Profile */}
                    <ResumeCard>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt={profile.name} src={profile.avatar} sx={{ width: 160, height: 160, border: '4px solid', borderColor: 'secondary.main' }} />
                            <Typography variant="h5" component="div" sx={{ mt: 2, fontFamily: 'Silkscreen, Commissioner, Roboto, Helvetica, Arial, sans-serif' }}>
                                {profile.name}
                            </Typography>
                            <Typography color="text.secondary" sx={{ mt: 1 }}>
                                {profile.address}
                            </Typography>
                            {/* ... other personal information */}
                        </Box>

                        {/* Contact Details */}
                        <Divider sx={{ mt: 2 }} />
                        <List component="nav" dense>
                            {profile.contacts.map((contact, index) => (
                                <ListItemButton key={index}>
                                    <ListItemIcon>
                                        <contact.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={contact.label} secondary={contact.value} />
                                </ListItemButton>
                            ))}
                        </List>
                        <Divider sx={{ mb: 2 }} />

                        {/* Skills */}
                        <Typography variant="h6" component="div" sx={{ mt: 2, fontFamily: 'Silkscreen, Commissioner, Roboto, Helvetica, Arial, sans-serif' }}>
                            Skills
                        </Typography>
                        <List component="nav" dense>
                            {profile.skills.map((skill, index) => (
                                <ListItemButton key={index}>
                                    <ListItemText primary={skill.category} secondary={skill.skills} />
                                </ListItemButton>
                            ))}
                        </List>
                    </ResumeCard>

                    {/* Certifications */}
                    {profile.certifications && profile.certifications.length > 0 && (
                        <ResumeCard>
                            <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontFamily: 'Silkscreen, Commissioner, Roboto, Helvetica, Arial, sans-serif' }}>
                                Certifications
                            </Typography>
                            <List component="nav" dense>
                                {profile.certifications.map((cert, index) => (
                                    <ListItemButton key={index} component="a" href={cert.file} target="_blank" rel="noopener noreferrer">
                                        <ListItemText primary={cert.name} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </ResumeCard>
                    )}

                    {/* Social Media Links */}
                    <ResumeCard>
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontFamily: 'Silkscreen, Commissioner, Roboto, Helvetica, Arial, sans-serif' }}>
                            Social Media
                        </Typography>
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            {profile.socialMedia.map((media, index) => (
                                <IconButton color="secondary" key={index} component="a" href={media.url} target="_blank" rel="noopener noreferrer">
                                    <media.icon />
                                </IconButton>
                            ))}
                        </Box>
                    </ResumeCard>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={8}>

                    {/* Education */}
                    <ResumeCard>
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Silkscreen, Commissioner, Roboto, Helvetica, Arial, sans-serif' }}>
                            Education
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {profile.education.map((education, index) => (
                                <React.Fragment key={index}>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="subtitle1">{education.degree}</Typography>
                                        <Typography variant="body2" color="text.secondary">{education.date}</Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            {education.school}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            {education.gpa}
                                        </Typography>
                                    </Box>

                                    {/* Divider but not for single or last item */}
                                    {index !== profile.education.length - 1 && (
                                        <Divider sx={{ mb: 2 }} />
                                    )}

                                </React.Fragment>
                            ))}
                        </Box>
                    </ResumeCard>

                    {/* Work Experience */}
                    <ResumeCard>
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Silkscreen, Commissioner, Roboto, Helvetica, Arial, sans-serif' }}>
                            Work Experience
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {profile.experience.map((experience, index) => (
                                <React.Fragment key={index}>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="subtitle1">{experience.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{experience.date}</Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            {Array.isArray(experience.description)
                                                ? experience.description.join(' ')
                                                : experience.description}
                                        </Typography>
                                    </Box>

                                    {/* Divider but not for single or last item */}
                                    {index !== profile.experience.length - 1 && (
                                        <Divider sx={{ mb: 2 }} />
                                    )}

                                </React.Fragment>
                            ))}
                        </Box>
                    </ResumeCard>

                    {/* Projects */}
                    <ResumeCard>
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Silkscreen, Commissioner, Roboto, Helvetica, Arial, sans-serif' }}>
                            Projects
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {profile.projects && profile.projects.length > 0 ? (
                                profile.projects.map((project, index) => (
                                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 2 }} key={index}>
                                        <img src={project.image} alt={project.title} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 8 }} />
                                        <Box>
                                            <Typography variant="subtitle1">{project.title}</Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                                {project.description}
                                            </Typography>
                                            <Button variant="contained" color="secondary" href={project.url} target="_blank" rel="noopener noreferrer" sx={{ mt: 1 }}>
                                                View on GitHub
                                            </Button>
                                        </Box>
                                    </Box>
                                ))
                            ) : (
                                <Typography variant="body2" color="text.secondary">No projects added yet.</Typography>
                            )}
                        </Box>
                    </ResumeCard>

                </Grid>
 
            </Grid>
        </Box>
    );
}