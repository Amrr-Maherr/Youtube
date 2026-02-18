# YouTube Data API v3 - Complete Endpoints Reference

**Base URL:** `https://www.googleapis.com/youtube/v3`

**Authentication:** Every request requires either:
- API Key (`key` parameter)
- OAuth 2.0 token (required for `insert`, `update`, `delete` operations)

---

## 📋 Table of Contents

| # | Resource | Methods |
|---|----------|---------|
| 1 | [Activities](#1-activities) | `list` |
| 2 | [Captions](#2-captions) | `list`, `insert`, `update`, `download`, `delete` |
| 3 | [ChannelBanners](#3-channelbanners) | `insert` |
| 4 | [Channels](#4-channels) | `list`, `update` |
| 5 | [ChannelSections](#5-channelsections) | `list`, `insert`, `update`, `delete` |
| 6 | [Comments](#6-comments) | `list`, `insert`, `update`, `setModerationStatus`, `delete` |
| 7 | [CommentThreads](#7-commentthreads) | `list`, `insert` |
| 8 | [i18nLanguages](#8-i18nlanguages) | `list` |
| 9 | [i18nRegions](#9-i18nregions) | `list` |
| 10 | [Members](#10-members) | `list` |
| 11 | [MembershipsLevels](#11-membershipslevels) | `list` |
| 12 | [PlaylistImages](#12-playlistimages) | `list`, `insert`, `update`, `delete` |
| 13 | [PlaylistItems](#13-playlistitems) | `list`, `insert`, `update`, `delete` |
| 14 | [Playlists](#14-playlists) | `list`, `insert`, `update`, `delete` |
| 15 | [Search](#15-search) | `list` |
| 16 | [Subscriptions](#16-subscriptions) | `list`, `insert`, `delete` |
| 17 | [Thumbnails](#17-thumbnails) | `set` |
| 18 | [VideoAbuseReportReasons](#18-videoabusereportreasons) | `list` |
| 19 | [VideoCategories](#19-videocategories) | `list` |
| 20 | [Videos](#20-videos) | `list`, `insert`, `update`, `rate`, `getRating`, `reportAbuse`, `delete` |
| 21 | [Watermarks](#21-watermarks) | `set`, `unset` |

---

## 1. Activities

Information about channel/user actions (rating, sharing, uploading, etc.)

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/activities` | Returns channel activity events matching request criteria |

**Example:**
```
GET /activities?channelId=CHANNEL_ID&part=snippet,contentDetails
```

---

## 2. Captions

YouTube caption tracks associated with videos

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/captions` | Returns caption tracks for a specified video |
| `insert` | POST | `/captions` | Uploads a caption track |
| `update` | PUT | `/captions` | Updates a caption track (draft status, file, or both) |
| `download` | GET | `/captions/{id}` | Downloads a caption track |
| `delete` | DELETE | `/captions` | Deletes a caption track |

**Examples:**
```
GET /captions?videoId=VIDEO_ID
POST /captions?part=snippet&videoId=VIDEO_ID
PUT /captions?part=snippet&id=CAPTION_ID
GET /captions/CAPTION_ID?tfmt=TFFMT
DELETE /captions?id=CAPTION_ID
```

---

## 3. ChannelBanners

Banner images for channels

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `insert` | POST | `/channelBanners/insert` | Uploads a channel banner image (16:9 ratio, min 2048x1152px) |

**Example:**
```
POST /channelBanners/insert?part=snippet
```

---

## 4. Channels

YouTube channel information

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/channels` | Returns channel resources matching request criteria |
| `update` | PUT | `/channels` | Updates channel metadata (brandingSettings, invideoPromotion) |

**Examples:**
```
GET /channels?part=snippet&id=CHANNEL_ID
GET /channels?part=snippet&forUsername=USERNAME
PUT /channels?part=brandingSettings
```

---

## 5. ChannelSections

Featured video sets on a channel

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/channelSections` | Returns channelSection resources matching request |
| `insert` | POST | `/channelSections` | Adds a section to authenticated user's channel (max 10 shelves) |
| `update` | PUT | `/channelSections` | Updates a channel section |
| `delete` | DELETE | `/channelSections` | Deletes a channel section |

**Examples:**
```
GET /channelSections?part=snippet&channelId=CHANNEL_ID
POST /channelSections?part=snippet
PUT /channelSections?part=snippet
DELETE /channelSections?id=SECTION_ID
```

---

## 6. Comments

Individual YouTube comments (top-level or replies)

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/comments` | Returns comments matching request parameters |
| `insert` | POST | `/comments` | Creates a reply to an existing comment |
| `update` | PUT | `/comments` | Modifies a comment |
| `setModerationStatus` | POST | `/comments/setModerationStatus` | Sets moderation status of one or more comments |
| `delete` | DELETE | `/comments` | Deletes a comment |

**Examples:**
```
GET /comments?part=snippet&parentId=PARENT_ID
POST /comments?part=snippet
PUT /comments?part=snippet
POST /comments/setModerationStatus?id=COMMENT_ID&moderationStatus=STATUS
DELETE /comments?id=COMMENT_ID
```

---

## 7. CommentThreads

Top-level comments with replies

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/commentThreads` | Returns comment threads matching request parameters |
| `insert` | POST | `/commentThreads` | Creates a new top-level comment |

**Examples:**
```
GET /commentThreads?part=snippet&videoId=VIDEO_ID
GET /commentThreads?part=snippet&channelId=CHANNEL_ID
POST /commentThreads?part=snippet
```

---

## 8. i18nLanguages

Supported application/UI languages

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/i18nLanguages` | Returns supported application languages |

**Example:**
```
GET /i18nLanguages?part=snippet
```

---

## 9. i18nRegions

Supported content regions

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/i18nRegions` | Returns supported content regions |

**Example:**
```
GET /i18nRegions?part=snippet
```

---

## 10. Members

Channel members (recurring supporters)

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/members` | Lists members for a channel (requires channel owner authorization) |

**Example:**
```
GET /members?part=snippet&channelId=CHANNEL_ID
```

---

## 11. MembershipsLevels

Pricing levels for channel memberships

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/membershipsLevels` | Returns membership levels for the authorized channel |

**Example:**
```
GET /membershipsLevels?part=snippet
```

---

## 12. PlaylistImages

Images associated with playlists

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/playlistImages` | Returns playlist images |
| `insert` | POST | `/playlistImages` | Adds a playlist image |
| `update` | PUT | `/playlistImages` | Updates a playlist image |
| `delete` | DELETE | `/playlistImages` | Deletes a playlist image |

**Examples:**
```
GET /playlistImages?playlistId=PLAYLIST_ID
POST /playlistImages?playlistId=PLAYLIST_ID
PUT /playlistImages?playlistId=PLAYLIST_ID&imageType=TYPE
DELETE /playlistImages?playlistId=PLAYLIST_ID&imageType=TYPE
```

---

## 13. PlaylistItems

Resources (videos) included in playlists

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/playlistItems` | Returns playlist items matching request parameters |
| `insert` | POST | `/playlistItems` | Adds a resource to a playlist |
| `update` | PUT | `/playlistItems` | Modifies a playlist item (e.g., position) |
| `delete` | DELETE | `/playlistItems` | Deletes a playlist item |

**Examples:**
```
GET /playlistItems?part=snippet&playlistId=PLAYLIST_ID
POST /playlistItems?part=snippet
PUT /playlistItems?part=snippet
DELETE /playlistItems?id=ITEM_ID
```

---

## 14. Playlists

YouTube playlists

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/playlists` | Returns playlists matching request parameters |
| `insert` | POST | `/playlists` | Creates a playlist |
| `update` | PUT | `/playlists` | Modifies a playlist (title, description, privacy) |
| `delete` | DELETE | `/playlists` | Deletes a playlist |

**Examples:**
```
GET /playlists?part=snippet&id=PLAYLIST_ID
GET /playlists?part=snippet&channelId=CHANNEL_ID
POST /playlists?part=snippet
PUT /playlists?part=snippet
DELETE /playlists?id=PLAYLIST_ID
```

---

## 15. Search

Search results (videos, channels, playlists)

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/search` | Returns search results matching query parameters |

**Examples:**
```
GET /search?part=snippet&q=QUERY&order=relevance
GET /search?part=snippet&channelId=CHANNEL_ID&type=video
GET /search?part=snippet&relatedToVideoId=VIDEO_ID&type=video
```

---

## 16. Subscriptions

User subscriptions to channels

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/subscriptions` | Returns subscriptions matching request criteria |
| `insert` | POST | `/subscriptions` | Adds a subscription for authenticated user's channel |
| `delete` | DELETE | `/subscriptions` | Deletes a subscription |

**Examples:**
```
GET /subscriptions?part=snippet&channelId=CHANNEL_ID
GET /subscriptions?part=snippet&id=SUBSCRIPTION_ID
POST /subscriptions?part=snippet
DELETE /subscriptions?id=SUBSCRIPTION_ID
```

---

## 17. Thumbnails

Thumbnail images for resources

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `set` | POST | `/thumbnails/set` | Uploads and sets a custom video thumbnail |

**Example:**
```
POST /thumbnails/set?videoId=VIDEO_ID
```

---

## 18. VideoAbuseReportReasons

Reasons for reporting abusive videos

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/videoAbuseReportReasons` | Returns reasons for reporting abusive videos |

**Example:**
```
GET /videoAbuseReportReasons?part=snippet
```

---

## 19. VideoCategories

Categories for uploaded videos

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/videoCategories` | Returns video categories |

**Examples:**
```
GET /videoCategories?part=snippet&id=CATEGORY_ID
GET /videoCategories?part=snippet&regionCode=US
```

---

## 20. Videos

YouTube videos

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `list` | GET | `/videos` | Returns videos matching request parameters |
| `insert` | POST | `/videos` | Uploads a video with optional metadata |
| `update` | PUT | `/videos` | Updates video metadata |
| `rate` | POST | `/videos/rate` | Adds/removes like or dislike rating |
| `getRating` | GET | `/videos/getRating` | Retrieves authorized user's ratings for videos |
| `reportAbuse` | POST | `/videos/reportAbuse` | Reports a video for abusive content |
| `delete` | DELETE | `/videos` | Deletes a YouTube video |

**Examples:**
```
GET /videos?part=snippet&id=VIDEO_ID
GET /videos?part=snippet&chart=mostPopular
POST /videos?part=snippet,status
PUT /videos?part=snippet
POST /videos/rate?id=VIDEO_ID&rating=like
GET /videos/getRating?id=VIDEO_ID
POST /videos/reportAbuse?id=VIDEO_ID
DELETE /videos?id=VIDEO_ID
```

---

## 21. Watermarks

Channel watermark images during video playback

| Method | HTTP | Endpoint | Description |
|--------|------|----------|-------------|
| `set` | POST | `/watermarks/set` | Uploads and sets a watermark for a channel |
| `unset` | POST | `/watermarks/unset` | Deletes a channel's watermark image |

**Examples:**
```
POST /watermarks/set?channelId=CHANNEL_ID
POST /watermarks/unset?channelId=CHANNEL_ID
```

---

## 📊 Summary by HTTP Method

| HTTP Method | Count | Resources |
|-------------|-------|-----------|
| **GET** | 21 | All resources (list/retrieve) |
| **POST** | 13 | captions, channelBanners, channelSections, comments, commentThreads, playlistImages, playlistItems, playlists, subscriptions, thumbnails, videos, watermarks |
| **PUT** | 8 | captions, channels, channelSections, comments, playlistImages, playlistItems, playlists, videos |
| **DELETE** | 8 | captions, channelSections, comments, playlistImages, playlistItems, playlists, subscriptions, videos |

---

## 🔑 Common Query Parameters

| Parameter | Description |
|-----------|-------------|
| `part` | Specifies resource properties to return (required) |
| `id` | Specifies resource IDs |
| `channelId` | Specifies channel ID |
| `videoId` | Specifies video ID |
| `playlistId` | Specifies playlist ID |
| `maxResults` | Maximum results to return (0-50) |
| `pageToken` | Pagination token |
| `order` | Sort order (date, relevance, rating, views, etc.) |
| `q` | Search query |
| `type` | Resource type (video, channel, playlist) |
| `key` | API key |

---

## 📝 Notes

1. **Quota Limits:** Each API call consumes quota units. Different operations have different costs.
2. **Rate Limits:** API has daily quotas and per-second rate limits.
3. **OAuth 2.0:** Required for operations that modify data or access private user information.
4. **API Key:** Sufficient for read-only operations on public data.

---

**Official Documentation:** https://developers.google.com/youtube/v3/docs
