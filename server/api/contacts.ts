export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, message: 'Method not allowed' })
  }
  
  try {
    const body = await readBody(event)
    
    // In a real app, save this to Supabase or send an email.
    // For now, we simulate success.
    console.log('Received new contact submission:', body)
    
    return {
      success: true,
      message: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!'
    }
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to submit contact' })
  }
})
