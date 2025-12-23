import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Path to store subscribers
const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json')

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify({ subscribers: [] }, null, 2))
  }
}

// Read subscribers from file
function readSubscribers() {
  ensureDataDirectory()
  const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8')
  return JSON.parse(data)
}

// Write subscribers to file
function writeSubscribers(data: any) {
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(data, null, 2))
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Read current subscribers
    const data = readSubscribers()

    // Check if email already exists
    const existingSubscriber = data.subscribers.find(
      (sub: any) => sub.email.toLowerCase() === email.toLowerCase()
    )

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'This email is already subscribed!' },
        { status: 400 }
      )
    }

    // Add new subscriber
    const newSubscriber = {
      email,
      subscribedAt: new Date().toISOString(),
      id: Date.now().toString(),
    }

    data.subscribers.push(newSubscriber)

    // Save to file
    writeSubscribers(data)

    return NextResponse.json(
      { 
        message: 'Successfully subscribed!',
        subscriber: newSubscriber 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error subscribing:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to view subscribers (for admin use)
export async function GET() {
  try {
    const data = readSubscribers()
    return NextResponse.json({
      total: data.subscribers.length,
      subscribers: data.subscribers,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    )
  }
}
